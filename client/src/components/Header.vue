<template lang="html">
  <v-toolbar app fixed dark class="teal darken-2">
    <v-toolbar-title>
      <router-link :to="{ name: 'HelloWorld' }">MEVN</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.loggedIn" flat :to="{ name: 'Register' }">Sign Up</v-btn>
      <v-btn v-if="!$store.state.loggedIn" flat :to="{ name: 'Login' }">Log In</v-btn>
      <v-btn v-if="$store.state.loggedIn" flat @click="logout">Log Out</v-btn>
      <v-btn v-if="$store.state.loggedIn" flat :to="{ name: 'Settings' }">{{ this.$store.state.user }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'HelloWorld' })
    }
  }
}
</script>

<style lang="css">
  .toolbar__title a {
    color: white;
    text-decoration: none;
  }
</style>
