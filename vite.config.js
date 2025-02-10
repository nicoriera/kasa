import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/kasa/" : "/",
  server: {
    proxy: {
      "/api-images": {
        target: "https://s3-eu-west-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-images/, ""),
      },
    },
  },
}));
