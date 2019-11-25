import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.config.productionTip = true
// axios 默认开启携带cookie
// axios.defaults.withCredentials = false
Vue.use(ElementUI);
Vue.use(Vueaxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 挂载到#app上，并且把App根组件渲染替代html中的div#app
