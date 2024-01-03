import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
        type: "module",
      },
      registerType: "prompt",
      includeAssets: ["**/*"],
      manifest: {
        name: "Rick and Morty",
        short_name: "RM",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#b67fe7",
        theme_color: "#b67fe7",
        orientation: "portrait-primary",
        icons: [
          {
            src: "icons/icon-48x48.png",
            type: "image/png",
            sizes: "48x48",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-72x72.png",
            type: "image/png",
            sizes: "72x72",

            purpose: "any maskable",
          },
          {
            src: "icons/icon-96x96.png",
            type: "image/png",
            sizes: "96x96",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-128x128.png",
            type: "image/png",
            sizes: "128x128",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-144x144.png",
            type: "image/png",
            sizes: "144x144",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-152x152.png",
            type: "image/png",
            sizes: "152x152",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-192x192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-384x384.png",
            type: "image/png",
            sizes: "384x384",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
