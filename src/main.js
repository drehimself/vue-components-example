import Vue from 'vue'
import VueFuse from 'vue-fuse'
import VModal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

Vue.use(ToggleButton)
Vue.use(VueFuse)
Vue.use(VModal)

Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
