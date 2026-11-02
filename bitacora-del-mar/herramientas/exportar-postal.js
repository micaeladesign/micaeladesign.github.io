// Exporta la postal a PNG de 1800 × 1200.
// Uso (desde bitacora-del-mar/):  node herramientas/exportar-postal.js [manuscrito|imprenta] [salida.png]
// Necesita Playwright:  npm i -D playwright && npx playwright install chromium

const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const verso = process.argv[2] || "manuscrito";
  const salida = process.argv[3] || "assets/postal-patricio.png";
  const fuente = "file://" + path.resolve(__dirname, "..", "postal-fuente.html") + "?verso=" + verso;

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1800, height: 1200 }, deviceScaleFactor: 1 });

  await page.goto(fuente);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every((img) => img.complete));
  await page.waitForTimeout(300);

  await page.screenshot({ path: salida });
  await browser.close();

  console.log("Postal exportada:", salida);
})();
