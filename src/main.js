import Vue from 'vue'
import VueFuse from 'vue-fuse'
import App from './App.vue'

Vue.use(VueFuse)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
