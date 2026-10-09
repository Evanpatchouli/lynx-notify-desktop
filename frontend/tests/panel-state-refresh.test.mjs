import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import * as vue from 'vue';
import { compileScript, parse } from 'vue/compiler-sfc';
import ts from 'typescript';

const filename = 'PanelApp.vue';
const source = await readFile(new URL('../src/panel/PanelApp.vue', import.meta.url), 'utf8');
const { descriptor } = parse(source, { filename });
const script = compileScript(descriptor, { id: 'panel-refresh-test' });
const { outputText } = ts.transpileModule(script.content, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
});

function mountPanel(t) {
  const nativeState = {
    settings: { opacity: 0.9 },
    tasks: [{ id: 'interval', enabled: true, nextRunAtMs: 1000, runCount: 0 }],
  };
  const mounted = [];
  const unmounted = [];
  const intervals = new Map();
  const timeouts = new Map();
  let sequence = 0;
  let reads = 0;
  const hostBridge = {
    getState() {
      reads++;
      return structuredClone(nativeState);
    },
    windowCommand() {},
  };
  const exports = {};
  runInNewContext(outputText, {
    exports,
    require(name) {
      if (name === 'vue' || name === 'vue-lynx') {
        return {
          ...vue,
          onMounted: (callback) => mounted.push(callback),
          onUnmounted: (callback) => unmounted.push(callback),
        };
      }
      if (name === '../bridge') return { hostBridge };
      if (name === './utils/task') {
        return {
          createEmptyTask: () => ({ id: '', name: 'new' }),
          cloneTask: (task) => JSON.parse(JSON.stringify(task)),
        };
      }
      if (name.endsWith('.vue')) return {};
      throw new Error(`Unexpected import: ${name}`);
    },
    setInterval(callback, delay) {
      const id = sequence++;
      intervals.set(id, { callback, delay });
      return id;
    },
    clearInterval: (id) => intervals.delete(id),
    setTimeout(callback) {
      const id = sequence++;
      timeouts.set(id, callback);
      return id;
    },
    clearTimeout: (id) => timeouts.delete(id),
  });
  const scope = vue.effectScope();
  const panel = scope.run(() => exports.default.setup({}, { expose() {} }));
  mounted.forEach((callback) => callback());
  function unmount() {
    unmounted.forEach((callback) => callback());
    scope.stop();
  }
  t.after(unmount);
  return {
    panel, nativeState, intervals, timeouts, unmount,
    get reads() { return reads; },
    tick() { for (const { callback } of intervals.values()) callback(); },
  };
}

test('task list follows repeated native runs and completion without window commands', (t) => {
  const app = mountPanel(t);
  assert.equal(app.intervals.size, 1);
  assert.ok([...app.intervals.values()][0].delay <= 1000);
  for (let run = 1; run <= 3; run++) {
    Object.assign(app.nativeState.tasks[0], { nextRunAtMs: (run + 1) * 1000, runCount: run });
    app.tick();
    assert.equal(app.panel.state.value.tasks[0].nextRunAtMs, (run + 1) * 1000);
    assert.equal(app.panel.state.value.tasks[0].runCount, run);
  }
  Object.assign(app.nativeState.tasks[0], { enabled: false, nextRunAtMs: 0 });
  app.tick();
  assert.equal(app.panel.state.value.tasks[0].enabled, false);
  assert.equal(app.panel.state.value.tasks[0].nextRunAtMs, 0);
});

test('unchanged native state keeps the existing list reference', (t) => {
  const app = mountPanel(t);
  const state = app.panel.state.value;
  app.tick();
  assert.equal(app.panel.state.value, state);
});

test('polling preserves editor and settings edits and resumes on the task list', (t) => {
  const app = mountPanel(t);
  app.panel.openEdit(app.panel.state.value.tasks[0]);
  app.panel.editorTask.value.name = 'unsaved draft';
  app.nativeState.tasks[0].nextRunAtMs = 5000;
  const reads = app.reads;
  app.tick();
  assert.equal(app.reads, reads);
  assert.equal(app.panel.editorTask.value.name, 'unsaved draft');
  app.panel.page.value = 'settings';
  app.panel.state.value.settings.opacity = 0.6;
  app.tick();
  assert.equal(app.reads, reads);
  assert.equal(app.panel.state.value.settings.opacity, 0.6);
  app.panel.page.value = 'home';
  app.tick();
  assert.equal(app.panel.state.value.tasks[0].nextRunAtMs, 5000);
});

test('unmount clears polling and pending toast timers', (t) => {
  const app = mountPanel(t);
  app.panel.showToast('test');
  assert.equal(app.timeouts.size, 1);
  app.unmount();
  assert.equal(app.intervals.size, 0);
  assert.equal(app.timeouts.size, 0);
  const reads = app.reads;
  app.tick();
  assert.equal(app.reads, reads);
});
