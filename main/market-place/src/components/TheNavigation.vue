<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary row">
        <span class="md-title md-toolbar-section-start">Market Place</span>
        <md-button to="/">Home</md-button>
        <template v-if="authenticated">
          <div class="sm-layout-item">
            <md-menu md-direction="bottom-start">
              <md-button md-menu-trigger>Categories</md-button>

              <md-menu-content>
                <md-menu-item
                  value="fight-club"
                  v-for="category in allCategories"
                  :key="category.id"
                  @click="getCategoryById(category.category_id)"
                  >{{ category.title }} ({{
                    category.products_quantity
                  }})</md-menu-item
                >
                <md-menu-item value="fight-club" @click="getCategoryById('')"
                  >All</md-menu-item
                >
              </md-menu-content>
            </md-menu>
          </div>
          <span>{{ user.full_name }}</span>
          <md-button to="/favorites">Favoirtes</md-button>
          <md-button to @click="signOut">Sign Out</md-button>
        </template>
        <template v-else>
          <md-button to="/signin">Sign In</md-button>
          <md-button to="/signup">Sign Up</md-button>
        </template>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "theNavigation",
  data: () => ({
    menuVisible: true,
    movie: "godfather",
  }),


  methods: {
    ...mapActions({
      signOut: "auth/logout",
      getCategories: "products/getCategories",
      getCategoryId: "products/getCategoryId",
    }),

    getCategoryById(id) {
      this.getCategoryId(id);
    },
  },

  async mounted() {
    this.getCategories();
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      allCategories: "products/allCategories",
    }),
  },
};
</script>