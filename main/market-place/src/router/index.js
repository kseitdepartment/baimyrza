import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from '../views/SignUp.vue'
import Favorites from "../views/Favorites.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp
  },
  {
    path: "/signin",
    name: "signIn",
    component: SignIn,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'signIn'
        })
      }
      next();
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
