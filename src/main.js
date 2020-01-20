import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import Routes from "./router/index";
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router: Routes,
  render: h => h(App),
}).$mount('#app')
