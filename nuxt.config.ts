
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ['vuetify','@vuepic/vue-datepicker','vue-toastification']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'floating-vue/nuxt',
    //...
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/colors.scss";',
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

