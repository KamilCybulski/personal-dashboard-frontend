import Vue from 'vue';
import KeenUI from 'keen-ui/src/index';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(KeenUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
