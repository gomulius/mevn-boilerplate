<template lang="html">
  <v-toolbar fixed dark class="teal darken-2">
    <v-toolbar-title>
      <router-link :to="{ name: 'HelloWorld' }">MEVN</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat :to="{ name: 'Register' }">Sign Up</v-btn>

      <v-btn flat :to="{ name: 'Login' }">Log In</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">
  .toolbar__title a {
    color: white;
    text-decoration: none;
  }
</style>
