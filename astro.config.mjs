// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // base: "/alfred",
  site: "https://creatividad-e-inteligencia.github.io",
  base: "alfred-landing",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
