// Exporta las postales de Fondo a PNG de 1800 × 1200.
// Uso (desde bitacora-del-mar/):
//   node herramientas/exportar-postal.js              → todas
//   node herramientas/exportar-postal.js batatita     → solo una
// Salida: assets/postales/postal-<nombre>.png
// Necesita Playwright:  npm i -D playwright && npx playwright install chromium

const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const raiz = path.resolve(__dirname, "..");
const fuente = path.join(raiz, "postal-fuente.html");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1800, height: 1200 }, deviceScaleFactor: 1 });

  // Lee la lista de postales de la propia plantilla
  await page.goto("file://" + fuente);
  const todas = await page.evaluate(() => Object.keys(POSTALES));
  const pedidas = process.argv.slice(2);
  const ids = pedidas.length ? pedidas : todas;

  fs.mkdirSync(path.join(raiz, "assets", "postales"), { recursive: true });

  for (const id of ids) {
    await page.goto("file://" + fuente + "?postal=" + encodeURIComponent(id));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => [...document.images].every((img) => img.complete && img.naturalWidth));
    await page.waitForTimeout(200);

    const salida = path.join(raiz, "assets", "postales", "postal-" + id + ".png");
    await page.screenshot({ path: salida });
    console.log("Postal exportada:", path.relative(raiz, salida));
  }

  await browser.close();
})();
