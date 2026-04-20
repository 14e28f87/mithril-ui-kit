import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Mithril UI Kit",
  description: "Mithril.js 向け UI コンポーネントライブラリ",
  lang: "ja-JP",
  base: "/mithril-ui-kit/",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Docs", link: "/" },
      { text: "GitHub", link: "https://github.com/14e28f87/mithril-ui-kit" }
    ],
    search: {
      provider: "local"
    }
  },
  vite: {
    resolve: {
      alias: {
        "mithril-ui-kit": fileURLToPath(new URL("../../src/index.ts", import.meta.url)),
        "mithril-ui-kit/components": fileURLToPath(new URL("../../src/components/index.ts", import.meta.url))
      }
    }
  }
});
