import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

function moduleUrl(source) {
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  });
  return `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
}

const constants = moduleUrl(await readFile(new URL('../src/panel/constants.ts', import.meta.url), 'utf8'));
const source = await readFile(new URL('../src/panel/utils/task.ts', import.meta.url), 'utf8');
const { parseDateTime, formatDateTime } = await import(moduleUrl(source.replace("'../constants'", `'${constants}'`)));

test('accepts the reported start time with explicit seconds in local time', () => {
  assert.equal(parseDateTime('2026-10-09 12:00:00'), new Date(2026, 9, 9, 12, 0, 0).getTime());
  assert.equal(parseDateTime('2026-10-09 12:00:37'), new Date(2026, 9, 9, 12, 0, 37).getTime());
});

test('preserves minute-only input, T separator, whitespace and unpadded fields', () => {
  const expected = new Date(2026, 9, 9, 12, 0, 0).getTime();
  for (const value of ['2026-10-09 12:00', '2026-10-09T12:00:00', ' 2026-10-09 12:00:00 ', '2026-10-9 12:0:0']) {
    assert.equal(parseDateTime(value), expected, value);
  }
});

test('keeps nonzero seconds when reopening and saving a task', () => {
  const timestamp = new Date(2026, 9, 9, 12, 0, 37).getTime();
  assert.equal(formatDateTime(timestamp), '2026-10-09 12:00:37');
  assert.equal(parseDateTime(formatDateTime(timestamp)), timestamp);
  assert.equal(formatDateTime(new Date(2026, 9, 9, 12, 0, 0).getTime()), '2026-10-09 12:00');
  assert.equal(formatDateTime(0), '');
});

test('rejects invalid dates and time fields instead of letting Date normalize them', () => {
  for (const value of [
    '', '2026-10-09', '2026/10/09 12:00:00', '2026-10-09 12:00:00:00',
    '2026-10-09 12:00:60', '2026-10-09 12:60:00', '2026-10-09 24:00:00',
    '2026-13-09 12:00:00', '2026-00-09 12:00:00', '2026-10-00 12:00:00',
    '2026-10-32 12:00:00', '2026-02-29 12:00:00', '2026-04-31 12:00:00',
  ]) {
    assert.equal(parseDateTime(value), 0, value);
  }
  assert.equal(parseDateTime('2028-02-29 12:00:00'), new Date(2028, 1, 29, 12, 0, 0).getTime());
});
