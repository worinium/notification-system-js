import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
// import Views
import VueRouter from "vue-router";
import routes from "./routes";

import Axios from "axios";
import store from "./store";
import "./registerServiceWorker";

import { CarouselPlugin } from "bootstrap-vue";
Vue.use(CarouselPlugin);

Vue.prototype.$http = Axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000
});

Vue.use(VueRouter);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//defined as global component
Vue.component("VueFontawesome",require("vue-fontawesome-icon/VueFontawesome.vue").default);

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
