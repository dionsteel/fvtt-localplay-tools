import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import nested from "postcss-nested";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {},
    postcss: {
      plugins: [nested],
    },
  },
  build: {
    minify: false,
    cssCodeSplit: false,
    manifest: true,
    copyPublicDir: true,
    assetsDir: "./scripts/",
    // lib: {
    //   entry: "src/main.ts",
    //   name: "InPersonHud",
    // },
    rollupOptions: {
      // external: ["vue","pinia"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: "Vue",
        //   pinia:"Pinia"
        // },
        entryFileNames: "in-person-hud.mjs",
        assetFileNames(chunkInfo) {
          return "" + chunkInfo.name;
        },
      },
    },
  },
  // base: "/modules/in-person-hud/",

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
