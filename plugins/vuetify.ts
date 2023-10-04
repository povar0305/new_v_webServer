// plugins/vuetify.js
import { createVuetify } from 'vuetify'

import 'vuetify/styles'
import { mdi,aliases } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },

  })
  app.vueApp.use(vuetify)
})