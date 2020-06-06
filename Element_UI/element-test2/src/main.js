import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js'
import router from './router/index';

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
