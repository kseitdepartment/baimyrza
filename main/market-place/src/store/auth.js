import axios from "axios";
import router from "../router/index";
export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },

  getters: {
    authenticated(state) {
      return state.token && state.user;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },

  actions: {
    async signUp({ dispatch }, credentials) {
      let response = await axios.post("user/register", credentials, {
        headers: { "Content-Type": "application/json" },
      });
    },

    async signIn({ commit, dispatch }, credentials) {
      try {
        let response = await axios.post("user/login", credentials, {
          headers: { "Content-Type": "application/json" },
        });
        return dispatch("attempt", response.data.token);
      } catch (error) {

      }
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }

      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get("user/me");

        commit("SET_USER", response.data.user);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        console.log("failed");
      }
    },
    logout({ commit }) {
      commit("SET_USER", null);
      commit("SET_TOKEN", null);
      localStorage.removeItem("token");
      router.push("/signin");
    },
  },
};
