import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router  // 所有组件都能看到$router 和 $route
}).$mount('#app')
