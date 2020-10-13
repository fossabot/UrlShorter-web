import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueClipboard from 'vue-clipboard2'
import 'vuetify/dist/vuetify.min.css';
import 'typeface-roboto/index.css'

Vue.config.productionTip = false
Vue.use(VueClipboard)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
