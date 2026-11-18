import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import * as vue from 'vue';
import { compileScript, parse } from 'vue/compiler-sfc';
import ts from 'typescript';

const filename = 'UpdateSection.vue';
const source = await readFile(new URL('../src/panel/components/UpdateSection.vue', import.meta.url), 'utf8');
const script = compileScript(parse(source, { filename }).descriptor, { id: 'update-section-test' });
const { outputText } = ts.transpileModule(script.content, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
});

function mount(native) {
  const state = { currentVersion: '1.0.0', status: 'idle', message: '', checkedAtMs: 0, latestVersion: '' };
  const calls = { checks: 0, opens: 0 };
  const hooks = {};
  const timers = new Map();
  const bridge = {
    isNative: () => native,
    getUpdateState: () => ({ ...state }),
    checkForUpdates() { calls.checks++; state.status = 'checking'; },
    openUpdatePage() { calls.opens++; return true; },
  };
  const exports = {};
  runInNewContext(outputText, {
    exports,
    require(name) {
      if (name === 'vue' || name === 'vue-lynx') return {
        ...vue, onMounted: (callback) => { hooks.mount = callback; }, onUnmounted: (callback) => { hooks.unmount = callback; },
      };
      if (name === '../../bridge') return { hostBridge: bridge };
      if (name === '../utils/task') return { formatDateTime: String };
      throw new Error(name);
    },
    setInterval(callback) { timers.set(1, callback); return 1; },
    clearInterval: (handle) => timers.delete(handle),
  });
  const ui = exports.default.setup({}, { expose() {} });
  hooks.mount();
  return { ui, state, calls, hooks, timers };
}

test('settings reads native version/status without initiating another startup check', () => {
  const { ui, state, calls, hooks, timers } = mount(true);
  assert.equal(ui.update.value.currentVersion, '1.0.0');
  assert.equal(calls.checks, 0);
  ui.checkNow();
  ui.checkNow();
  assert.equal(calls.checks, 1);
  assert.equal(ui.checking.value, true);
  Object.assign(state, { status: 'available', latestVersion: 'v1.1.0', message: '发现新版本 v1.1.0' });
  timers.get(1)();
  assert.equal(ui.statusText.value, state.message);
  ui.openRelease();
  assert.equal(calls.opens, 1);
  hooks.unmount();
  assert.equal(timers.size, 0);
});

test('preview does not perform network checks or start a polling timer', () => {
  const { ui, calls, timers } = mount(false);
  ui.checkNow();
  assert.equal(calls.checks, 0);
  assert.equal(timers.size, 0);
});
