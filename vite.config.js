import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kasa/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Assurez-vous que les fichiers JSON sont copiés
    copyPublicDir: true,
  },
  server: {
    proxy: {
      "/api-images": {
        target: "https://s3-eu-west-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-images/, ""),
      },
    },
  },
});
