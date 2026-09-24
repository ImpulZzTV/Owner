// Rendert HTML -> PDF (A4 quer) + PNG-Vorschauen mit Chromium/Playwright
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import path from 'path';
const [,, html, pdf, pngPrefix] = process.argv;
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport: { width: 1123, height: 794 } });
await p.goto('file://' + path.resolve(html), { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(500);
await p.pdf({ path: pdf, width: '297mm', height: '210mm', printBackground: true, preferCSSPageSize: true });
if (pngPrefix) {
  const n = await p.evaluate(() => document.querySelectorAll('.page').length);
  const els = await p.$$('.page');
  for (let i = 0; i < n; i++) await els[i].screenshot({ path: `${pngPrefix}${String(i+1).padStart(2,'0')}.png` });
}
await b.close();
