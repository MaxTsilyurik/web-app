import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify";
import router from "./route"
import DefaultLayout from '@/layouts/default-layout'
import LoginLayout from '@/layouts/login-layout'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.component('default-layout', DefaultLayout);
Vue.component('loginLayout', LoginLayout);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
