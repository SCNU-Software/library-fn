import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = true
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 挂载到#app上，并且把App根组件渲染替代html中的div#app
