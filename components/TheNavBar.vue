<template>
  <v-app-bar color="#051b1f" clipped-left app dark>
      <v-spacer v-if="$route.name ==='cart'"></v-spacer>
      <nuxt-link to="/">
        <img class="mr-3" :src="require('@/assets/logo_1.jpg')" height="40"/>
      </nuxt-link>
			<v-toolbar-title color="cyan">STORENAME</v-toolbar-title>
			<v-spacer></v-spacer>
      <v-btn class="mr-5" v-if="$route.name!=='cart'" :to="'/cart'" icon>
          <v-badge
            color="teal"
            :value="cartSize > 0"
            :content="cartSize"
          >
            <v-icon large>mdi-basket</v-icon>
          </v-badge>
      </v-btn>
      <v-btn v-else class="mr-5" :to="'/'" icon>
          <v-icon large>mdi-home-variant</v-icon>
      </v-btn>
		</v-app-bar>
</template>

<script>
export default {
  name: 'TheNavBar',
  computed: {
    cartSize () {
      return this.$store.getters.getCartSize
    }
  }
}
</script>

<style>

</style>