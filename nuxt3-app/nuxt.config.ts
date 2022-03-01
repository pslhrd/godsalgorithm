import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: 'static',

  head: {
    title: "Gods Algorithm [V2.0]",
    htmlAttrs: {
        lang: "fr",
    },
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/styles/main.scss", "@/assets/fonts/fonts.scss"],
  vite: {
      css: {
          preprocessorOptions: {
              sass: {
                  additionalData: '@import "@/assets/styles/_variables.scss"',
              },
          },
      },
  },

  buildModules: [
    'nuxt-vite'
  ]
})
