import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import { DEFAULT_LOCALE, LOCALES } from "./src/i18n/utils";
import vercel from "@astrojs/vercel/serverless";
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
 site: "https://banta-technologies.github.io/bantatechnologies-dev.github.io/",
  // todo - add site for sitemap
  build: {
    format: "directory",
  },

  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: LOCALES,
      },
    }),
    mdx(),
    alpinejs({ entrypoint: "/src/entrypoint" }),
  ],
  prefetch: true,
  adapter: awsAmplify(),
  output: "server",
  adapter: vercel(),
});
