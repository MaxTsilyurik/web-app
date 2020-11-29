import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify";
import router from "./route"


Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
