import axios from "axios";

export default {
  namespaced: true,
  state: {
    products: [],
    categories: [],
    favorites: [],
  },

  getters: {
    allProducts(state) {
      return state.products;
    },
    allCategories(state) {
      return state.categories;
    },
    allFavorites(state) {
      return state.favorites;
    },
  },

  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    updateCatetories(state, categories) {
      state.categories = categories;
    },
    updateFavorites(state, favorites) {
      state.favorites = favorites;
    },
  },

  actions: {
    async getProducts({ commit }) {
      const res = await axios.get("product/");
      commit("updateProducts", res.data.products);
    },

    async getCategories({ commit }) {
      const res = await axios.get("category/");
      commit("updateCatetories", res.data.categories);
    },

    async getCategoryId({ commit }, id) {
      const res = await axios.get(`product/${id}`);
      commit("updateProducts", res.data.products);
    },

    async getFavorites({ commit }) {
      const res = await axios.get("/favorites");
      commit("updateFavorites", res.data.favorites);
    },

    async addProductFavorite({ commit }, id) {
      await axios.post(`/favorites`, { product_id: id });
    },

    async deleteProductFavorite({ commit, dispatch }, id) {
      await axios.delete(`/favorites/${id}`).then((res) =>{
        dispatch('getFavorites')
      })
    },

    async addProduct({ commit, dispatch }, product) {
      await axios.post(`/product/`, product).then((res) => {
        dispatch("getProducts");
      });
    },

    async deleteProduct({ commit, dispatch }, id) {
      await axios.delete(`/product/${id}`).then((res) => {
        dispatch("getProducts");
      });
    },
  },
};
