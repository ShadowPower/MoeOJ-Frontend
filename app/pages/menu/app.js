import Vue from 'vue'
import VueResource from 'vue-resource'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'

import navbar from 'components/navbar.vue'
import questions from 'components/questions.vue'
import tagscard from 'components/tagscard.vue'
import submissions from 'components/submissions.vue'

Vue.use(VueResource)
Vue.use(ElementUI)

Vue.component('navbar', navbar)
Vue.component('questions', questions)
Vue.component('tagscard', tagscard)
Vue.component('submissions', submissions)

new Vue({
  el: '#app',
  render: h => h(App)
})
