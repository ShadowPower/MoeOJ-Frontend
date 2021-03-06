import Vue from 'vue'
import VueResource from 'vue-resource'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'

Vue.use(VueResource)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
