import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify";
import router from "./route"
import DefaultLayout from '@/layouts/default-layout'
import LoginLayout from '@/layouts/login-layout'
import Axios from "axios";

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.component('default-layout', DefaultLayout);
Vue.component('loginLayout', LoginLayout);

Vue.prototype.$http = Axios.create({
  baseURL: 'http://localhost:8080/api'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
