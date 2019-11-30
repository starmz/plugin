import Vue from 'vue'
import App from './App.vue'
import myPlugin from './plugin/myPlugin.js'

Vue.config.productionTip = false
Vue.use(myPlugin, { tree: 3 })

new Vue({
  render: h => h(App),
}).$mount('#app')
