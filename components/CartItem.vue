<template>
  <v-list-item>
    <v-list-item-avatar height="100" width="100" tile>
      <v-img :src="imgSrc"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="name"></v-list-item-title>
    </v-list-item-content>

    <v-list-item-content class="text-center">
      <p class="mt-4">{{ priceFormatted }}</p>
    </v-list-item-content>
    <v-list-item-action>
      <v-text-field
            :value="qty"
            @input="changeQty($event)"
            min="1"
            type="number"
            style="width: 60px"
          ></v-text-field>
    </v-list-item-action>
    <v-list-item-content class="text-center">
      <p class="ml-8 mt-4">{{ totalFormatted }}</p>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn @click="removeProduct(product.id)" icon>
        <v-icon color="grey lighten-1" small>mdi-window-close</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { formatter } from "@/utils";

export default {
  name: "CartItem",
  data() {
    return {
      qty: this.product.qty,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require(`@/assets/${this.product.imgSrc}.jpeg`);
    },
    name() {
      return (
        this.$store.getters.getBrandName(this.product.brandId) +
        " / " +
        this.product.name
      );
    },
    priceFormatted() {
      return formatter.format(this.product.price);
    },
    total() {
      return this.qty * this.product.price;
    },
    totalFormatted() {
      return formatter.format(this.total);
    },
  },
  methods: {
    removeProduct(id) {
      this.$store.dispatch("removeProductFromCart", id);
    },
    changeQty(e) {
      this.qty = e;
      const newProduct = {
        ...this.product,
        qty: parseInt(this.qty),
      };
      this.$store.dispatch("editProduct", newProduct);
    },
  },
};
</script>

<style>
</style>