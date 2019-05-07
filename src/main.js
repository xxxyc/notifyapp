import Vue from "vue";
import App from "./App.vue";

import Xnotify from '@/lib/index';
Vue.config.productionTip = false;

Vue.use(Xnotify);

new Vue({
  render: h => h(App)
}).$mount("#app");
