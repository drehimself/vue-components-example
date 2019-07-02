import Vue from 'vue'
import VueFuse from 'vue-fuse'
import VModal from 'vue-js-modal'
import App from './App.vue'
import router from './router'

Vue.use(VueFuse)
Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
