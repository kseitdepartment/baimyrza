<template>
  <div>
     <md-card v-for="favorite in allFavorites" :key="favorite.id">
      <md-card-header>
        <div class="md-title">{{favorite.title}}</div>
      </md-card-header>

      <md-card-content>
      <!-- id: {{product.category_id}}  -->
      </md-card-content>

      <md-card-actions>
        <md-button @click="getProductDeleteId(favorite.product_id)">Delete</md-button>
      </md-card-actions>
    </md-card>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
export default {
  name: "favorites",
  computed: {
    ...mapGetters({
      allFavorites: "products/allFavorites",
    }),
  },
  methods: {
    ...mapActions({
      getFavorites: "products/getFavorites",
      deleteProductFavorite: "products/deleteProductFavorite",
    }),

    getProductDeleteId(id) {
      console.log(id)
      this.deleteProductFavorite(id);
    },
  },
  async mounted() {
    this.getFavorites();
  },
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>