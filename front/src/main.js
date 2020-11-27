import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify"; // Ensure you are using css-loader


Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
