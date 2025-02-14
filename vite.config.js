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
      "/kasa/api-images": {
        target: "https://s3-eu-west-1.amazonaws.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/kasa\/api-images/, ""),
        configure: (proxy) => {
          proxy.on("error", (err) => {
            console.log("proxy error", err);
          });
          proxy.on("proxyReq", (proxyReq, req) => {
            console.log("Sending Request to the Target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req) => {
            console.log(
              "Received Response from the Target:",
              proxyRes.statusCode,
              req.url
            );
          });
        },
      },
    },
  },
});
