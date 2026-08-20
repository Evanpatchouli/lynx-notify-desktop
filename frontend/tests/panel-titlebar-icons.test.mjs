import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const componentUrl = new URL('../src/panel/components/PanelTitleBar.vue', import.meta.url);
const svgIconUrls = [
  new URL('../src/panel/assets/icons/window-minimize.svg', import.meta.url),
  new URL('../src/panel/assets/icons/window-close.svg', import.meta.url),
];
const pngIconUrls = [
  new URL('../src/panel/assets/icons/window-minimize.png', import.meta.url),
  new URL('../src/panel/assets/icons/window-close.png', import.meta.url),
];

test('title-bar keeps complete SVG design sources', async () => {
  for (const iconUrl of svgIconUrls) {
    const svg = (await readFile(iconUrl, 'utf8')).trim();

    assert.match(svg, /^<svg\b[^>]*>[\s\S]+<\/svg>$/);
    assert.match(svg, /\bviewBox="0 0 24 24"/);
    assert.match(svg, /<(?:path|rect|line)\b/);
    assert.doesNotMatch(svg, /\bfill="(?:none|transparent)"/);
  }
});

test('title-bar PNG assets are valid 2x transparent icons', async () => {
  for (const iconUrl of pngIconUrls) {
    const png = await readFile(iconUrl);

    assert.deepEqual(png.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    assert.equal(png.readUInt32BE(16), 28);
    assert.equal(png.readUInt32BE(20), 28);
    assert.equal(png[25], 6, 'PNG must use RGBA color data');
  }
});

test('PanelTitleBar uses registered Lynx image views with explicit layout', async () => {
  const source = await readFile(componentUrl, 'utf8');

  assert.match(
    source,
    /const windowIconStyle = \{[\s\S]*width: '14px',[\s\S]*height: '14px',[\s\S]*flexShrink: 0,[\s\S]*\};/,
  );
  assert.match(source, /import minimizeIcon from '\.\.\/assets\/icons\/window-minimize\.png';/);
  assert.match(source, /import closeIcon from '\.\.\/assets\/icons\/window-close\.png';/);
  assert.match(source, /<image\s+:src="minimizeIcon"\s+mode="aspectFit"\s+:style="windowIconStyle"\s*\/>/);
  assert.match(source, /<image\s+:src="closeIcon"\s+mode="aspectFit"\s+:style="windowIconStyle"\s*\/>/);
  assert.doesNotMatch(source, /<svg\b/);
  assert.doesNotMatch(source, /<text\b[^>]*class="window-icon"/);
});
