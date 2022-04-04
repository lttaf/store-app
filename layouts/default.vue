<template>
  <v-app dark>
    <TheNavBar />    
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer
      app
      inset
      absolute
      color="#051b1f"
      class="justify-center"
    >
      <span>&copy; {{ new Date().getFullYear() }} Test Project</span>
    </v-footer>
  </v-app>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheNavBar
  }
}
</script>

<style scoped>
.v-application {
  background-color: '#102921';
}
</style>
