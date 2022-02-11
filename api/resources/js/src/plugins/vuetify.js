import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
}

export default new Vuetify(opts)
