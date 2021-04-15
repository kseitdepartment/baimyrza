import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

require("@/store/subscriber");

axios.defaults.baseURL = "http://localhost:3001/api";

Vue.config.productionTip = false;

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
