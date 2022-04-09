import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import less from 'less'
Vue.use(less)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import { Message } from 'element-ui';
Vue.prototype.$Message=Message

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
