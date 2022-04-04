<template>
  <div class="mb-15">
    <SideMenu v-if="!$vuetify.breakpoint.xs" @filterProducts="filterProducts" />
    <v-container>
      <div class="ml-10">
        <p class="mb-4 ml-6 mt-2">
          {{headline}}
        </p>
        <v-divider class="mb-6"></v-divider>
        <v-row>
          <v-col
            class="mr-0"
            v-for="product in products"
            :key="product.id"
            cols="12"
            md="3"
          >
            <ProductCard @filterProducts="filterProducts" :item="product" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import ProductCard from "~/components/ProductCard.vue";

export default {
  name: "ProductPanel",
  components: {
    SideMenu,
    ProductCard,
  },
  data() {
    return {
      products: this.$store.state.products,
      headline: 'Catalog'
    };
  },
  computed: {
    productsAll() {
      return this.$store.state.products;
    },
  },
  methods: {
    filterProducts(brandId) {
      if (!brandId) {
        this.headline = 'Catalog'
        return (this.products = this.productsAll);
      }
      this.headline = this.$store.getters.getBrandName(brandId)
      this.products = this.$store.getters.getProductsByBrand(brandId);
    },
  },
};
</script>

<style>
</style>