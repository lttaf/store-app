<template>
  <v-card max-width="250">
    <v-img :src="imgSrc" height="200px"></v-img>

    <v-card-title>
      {{ item.name }}
    </v-card-title>

    <v-card-subtitle>
      <v-btn @click="filterProducts" class="ma-0 pa-0" link text plain small>{{
        brandName
      }}</v-btn>
    </v-card-subtitle>

    <v-card-actions>
      <v-card-text>
        {{ price }}
      </v-card-text>

      <v-spacer></v-spacer>
      <v-btn v-show="qty > 0" color="pink" x-small outlined @click="removeProduct" icon>
        <v-icon small>mdi-minus</v-icon>
      </v-btn>
      <v-btn @click="addToCart" class="mr-3" icon>
        <v-badge color="teal" :value="qty > 0" :content="qty">
        <v-icon medium>mdi-cart-arrow-down</v-icon>
        </v-badge>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { formatter } from "@/utils";

export default {
  props: {
    item: {},
  },
  computed: {
    imgSrc() {
      return require(`@/assets/${this.item.imgSrc}.jpeg`);
    },
    price() {
      return formatter.format(this.item.price);
    },
    brandName() {
      return this.$store.getters.getBrandName(this.item.brandId);
    },
    qty() {
      const cartItem = this.$store.getters.getCartItem(this.item.id);
      return cartItem ? cartItem.qty : 0;
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", this.item.id);
      this.clicked = true;
    },
    filterProducts() {
      this.$emit("filterProducts", this.item.brandId);
    },
    removeProduct() {
      if (this.qty === 1)
        return this.$store.dispatch("removeProductFromCart", this.item.id);
      const newProduct = {
        ...this.item,
        qty: this.qty - 1,
      };
      this.$store.dispatch("editProduct", newProduct);
    },
  },
};
</script>

<style>
</style>