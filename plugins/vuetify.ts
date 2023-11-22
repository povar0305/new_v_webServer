// plugins/vuetify.js
import { createVuetify } from 'vuetify'

import 'vuetify/styles'
import { mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      aliases,
      sets: {
        mdi,fa
      },
    },

  })
  app.vueApp.use(vuetify)
})