import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import AstroPWA from '@vite-pwa/astro'
import auth from "auth-astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth(), AstroPWA({
    mode: 'development',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'Haiver',
      short_name: 'Portafolio de Haiver',
      theme_color: '#cccccc',
      icons: [
        {
          src: 'icon-57x57.png',
          sizes: '57x57',
          type: 'image/png',
        },
        {
          src: 'icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'icon-76x76.png',
          sizes: '76x76',
          type: 'image/png',
        },
        {
          src: 'icon-114x114.png',
          sizes: '114x114',
          type: 'image/png',
        },
        {
          src: 'icon-120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: 'icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: 'icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: 'icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\//],
    },
    experimental: {
      directoryAndTrailingSlashHandler: true,
    }
  }),],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: "server",
  adapter: cloudflare()
});