<template>
  <div class="container">
    <md-dialog :md-active.sync="showDialog" v-if="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <!-- <md-tabs md-dynamic-height> -->
      <form class="formik2" @submit.prevent="submit">
        <md-field md-clearable>
          <label>category_id</label>
          <md-input v-model="category_id" name="category"></md-input>
        </md-field>
        <md-field md-clearable>
          <label>title</label>
          <md-input v-model="title" name="title"></md-input>
        </md-field>

        <md-button class="md-raised md-primary" type="button"  @click="showDialog = false, getProductAddId()"
          >Add Product</md-button>
         <md-button class="md-raised md-primary" type="button"  @click="showDialog = false" 
          >Close</md-button>
      </form>
      <!-- </md-tabs> -->

     
    </md-dialog>

    <md-card
      ><md-button class="md-primary md-raised" @click="showDialog = true"
        >Show Dialog</md-button
      ></md-card
    >

    <md-card v-for="product in allProducts" :key="product.id">
      <md-card-header>
        <div class="md-title">{{ product.title }}</div>
      </md-card-header>

      <md-card-content> id: {{ product.product_id }} </md-card-content>

      <md-card-actions>
        <md-button @click="getProductId(product.product_id)"
          >Favorite</md-button
        >
        <md-button @click="getProductDeleteId(product.product_id)">Delete</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data: () => ({
    showDialog: false,
    category_id: "",
    title: "",
  }),

  computed: {
    ...mapGetters({
      allProducts: "products/allProducts",
    }),
  },
  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
      addProductFavorite: "products/addProductFavorite",
      deleteProduct: "products/deleteProduct",
      addProduct: "products/addProduct"
    }),

    getProductId(id) {
      this.addProductFavorite(id);
    },

    getProductDeleteId(id){
      console.log(id)
      this.deleteProduct(id)
    },

    getProductAddId(){
      console.log(this.category_id)
      this.addProduct({category_id: this.category_id, title: this.title})
    }
  },
  async mounted() {
    this.getProducts();
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
.md-field:last-child {
  margin-bottom: 40px;
}
.formik {
  display: flex;
  justify-content: center;
  align-content: center;
}
.formik2 {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>