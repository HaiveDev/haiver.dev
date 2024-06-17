import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), auth(), react()],
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