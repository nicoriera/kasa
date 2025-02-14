import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/kasa",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
  },
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/s3-images": {
        target: "https://s3-eu-west-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/s3-images/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Origin", "https://s3-eu-west-1.amazonaws.com");
          });
        },
      },
    },
  },
});
