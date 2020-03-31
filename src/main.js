import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import '@/assets/css/main.css'
import store from '../store.js'

Vue.use(ElementUI);
Vue.config.productionTip = false

//绑定一个自定义属性，来调节下拉列表
Vue.directive('document-click', {
  bind(el, bindings, vnode){
    document.addEventListener('click', bindings.value,false);
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
