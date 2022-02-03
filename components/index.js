// components/index.js
import Vue from 'vue'
import components from './lib/index.js'
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
for (const name in components) {
  Vue.component(name, {
    extends: components[name],
    props: {
      _customOptions: {
        type: Object,
        default: () => ({ ...options })
      }
    }
  })
}
