<template>
  <v-container v-if="cartItems.length > 0">
    <v-card class="mt-15">
      <v-row class="text-center mb-1">
        <v-col md="5"> Name </v-col>
        <v-col md="2"> Price </v-col>
        <v-col md="2"> Qty </v-col>
        <v-col md="2"> Total </v-col>
        <v-col md="1"></v-col>
      </v-row>

      <v-divider></v-divider>

      <CartItem v-for="item in cartItems" :key="item.id" :product="item" />

      <v-divider></v-divider>

      <div class="font-weight-light text-right mr-15 pr-15 mt-5 mb-5">
        <strong>Subtotal: </strong> {{ subtotalFormatted }}
      </div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :to="'/'" class="mb-2 mr-5" color="grey" x-large text> Get More </v-btn>
        <v-btn @click="dialog = true" class="mr-10 mb-2" x-large text> Checkout <v-icon dense>mdi-check</v-icon></v-btn>
      </v-card-actions>
    </v-card>
    <v-row justify="center" align="center">
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5 text-center">
            Confirm purchase?
          </v-card-title>

          <v-card-actions>
            <v-btn class="ma-1" color="grey" plain @click="dialog = false">
              I'm not done
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn class="ma-1" color="cyan" plain @click="emptyCart">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
  <EmptyCart v-else />
</template>

<script>
import { formatter } from "@/utils";
import CartItem from "@/components/CartItem.vue";
import EmptyCart from "@/components/EmptyCart.vue";

export default {
  name: "CartPage",
  components: {
    CartItem,
    EmptyCart,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    cartItems() {
      return Object.values(this.$store.getters.getCart);
    },
    subtotal() {
      return this.cartItems.reduce(
        (prev, current) => prev + current.price * current.qty,
        0
      );
    },
    subtotalFormatted() {
      return formatter.format(this.subtotal);
    },
  },
  methods: {
    emptyCart() {
      this.dialog = false;
      this.$store.dispatch("emptyCart");
    },
  },
};
</script>

<style>
</style>