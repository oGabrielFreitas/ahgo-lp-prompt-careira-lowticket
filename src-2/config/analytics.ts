/**
 * Cole seus scripts de analytics abaixo como strings.
 * Eles serão injetados no <head> automaticamente.
 *
 * Exemplo para Meta Pixel:
 * const META_PIXEL = `<script>...seu código do pixel...</script>`;
 *
 * Exemplo para GA4:
 * const GA4 = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
 * <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XXXXX');</script>`;
 */

const ANALYTICS_SCRIPTS: string[] = [
  // Cole seus scripts aqui como strings, um por item do array.
  // Exemplo: `<script>console.log("pixel")</script>`,
];

export function injectAnalytics() {
  if (typeof window === "undefined") return;
  ANALYTICS_SCRIPTS.forEach((script) => {
    if (!script.trim()) return;
    const container = document.createElement("div");
    container.innerHTML = script;
    Array.from(container.children).forEach((el) => {
      document.head.appendChild(el.cloneNode(true));
    });
  });
}
