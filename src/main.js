import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
