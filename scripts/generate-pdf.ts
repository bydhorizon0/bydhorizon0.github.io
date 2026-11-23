import { chromium } from "playwright";

const main = async (): Promise<void> => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });

  await page.emulateMedia({ media: "screen" });

  // Wait for webfonts (Pretendard, Poppins) and remove Astro/Vite dev overlay if present
  await page.evaluate(async () => {
    await document.fonts.ready;
    document
      .querySelectorAll("astro-dev-toolbar, #dev-toolbar")
      .forEach((el) => el.remove());
  });

  await page.pdf({
    path: "public/resume.pdf",
    format: "A4",
    margin: { top: "10mm", bottom: "10mm", left: "8mm", right: "8mm" },
    printBackground: true,
  });

  await browser.close();
};

void main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
