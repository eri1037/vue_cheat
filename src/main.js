import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.use(new VueSocketIO({
  debug:true,
  connection:SocketIO('ws://127.0.0.1:8000'),
}))


Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$message = ElementUI.Message
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
