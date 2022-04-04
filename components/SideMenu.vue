<template>
  <v-navigation-drawer app permanent clipped outlined fixed color="#022429" :width="200">
    <v-list>
      <v-list-item @click="filterProducts(null)" link>
        <v-list-item-content>
          <v-list-item-title class="text-h7 font-weight-bold"> ALL BRANDS </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list nav dense>
      <div v-for="item in brands" :key="item.id">
        <v-list-item class="mb-2" @click="filterProducts(item.id)" link>
          <v-list-item-title class="text-h7">{{item.name.toUpperCase()}}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: "SideMenu",
  computed: {
    brands () {
      return this.$store.state.brands
    }
  },
  methods: {
    filterProducts (brandId) {
      this.$emit('filterProducts', brandId)
    }
  },
};
</script>

<style>
</style>