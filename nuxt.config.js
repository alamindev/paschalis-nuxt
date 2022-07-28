import { defineNuxtConfig } from 'nuxt'
 
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@vueuse/nuxt"],
  components: true,
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  build: {
    transpile: ["typeface-noto-sans", "typeface-poppins", "typeface-roboto"],
  },
  app: {
    head: {
      title: "Nuxt wesbite",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Build up your premium, digital and responsive restaurant menu in minutes.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Arimo:wght@400;500&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&family=Inter:wght@200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,700&family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,300;1,400&display=swap",
        },
      ],
    },
  },
});
