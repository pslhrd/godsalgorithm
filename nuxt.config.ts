import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  // CSS
  css: ["@/assets/styles/main.scss", "@/assets/fonts/fonts.scss", "@/assets/styles/normalize.scss"],
  vite: {
      assetsInclude: ['**/*.glb', '**/*.gltf'],
      css: {
          preprocessorOptions: {
              sass: {
                  additionalData: '@import "@/assets/styles/_variables.scss"',
              },
          },
      },
  },

  // MODULES
  modules: ['@nuxtjs/prismic'],
  prismic: {
    endpoint: 'https://godsalgorithm.prismic.io/api/v2'
  },
  buildModules: [
    'nuxt-vite'
  ]
})
