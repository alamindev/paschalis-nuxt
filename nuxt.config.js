import { defineNuxtConfig } from 'nuxt'
 
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  components: true,
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  build: {
    transpile: ["typeface-noto-sans", "typeface-poppins", "typeface-roboto"],
  },
});
