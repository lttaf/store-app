<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4">
        <h1 class="text-center text--secondary font-weight-light display-2">Cart is empty :(</h1>
        <div class="text-center my-2 mt-6">
          <v-btn
            @click="pushHome"
            class="ma-2"
            outlined
            color="cyan"
            dark
            x-large
          >
            <v-icon left>
              mdi-arrow-expand-left
            </v-icon>
            Get Chairs
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "EmptyCart",
  methods: {
    pushHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>