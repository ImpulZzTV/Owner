// Rendert HTML -> PDF + optionale PNG-Vorschauen mit Chromium/Playwright.
// Format: A4 quer (Standard) oder A4 hoch, wenn <body data-format="a4-hoch">.
// Parameter können als Query-String übergeben werden: "bewerbung.html?agentur=XY"
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import path from 'path';
import { pathToFileURL } from 'url';
const [,, target, pdf, pngPrefix] = process.argv;
const [file, query] = target.split(/\?(.*)/s);
const url = pathToFileURL(path.resolve(file)).href + (query ? '?' + query : '');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport: { width: 1123, height: 1123 } });
await p.goto(url, { waitUntil: 'networkidle' });
const portrait = await p.evaluate(() => document.body.dataset.format === 'a4-hoch');
await p.setViewportSize(portrait ? { width: 794, height: 1123 } : { width: 1123, height: 794 });
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(500);
await p.pdf({ path: pdf, width: portrait ? '210mm' : '297mm', height: portrait ? '297mm' : '210mm', printBackground: true, preferCSSPageSize: true });
if (pngPrefix) {
  const els = await p.$$('.page');
  for (let i = 0; i < els.length; i++) await els[i].screenshot({ path: `${pngPrefix}${String(i+1).padStart(2,'0')}.png` });
}
await b.close();
