<template lang="html">
  <v-toolbar app fixed dark class="teal darken-2">
    <v-toolbar-title>
      <div v-if="!loggedIn">
        <router-link :to="{ name: 'HelloWorld' }">MEVN</router-link>
      </div>
      <div v-else>
        <router-link :to="{ name: 'Dashboard'}">MEVN</router-link>
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!loggedIn" flat :to="{ name: 'Register' }">Sign Up</v-btn>
      <v-btn v-if="!loggedIn" flat :to="{ name: 'Login' }">Log In</v-btn>
      <v-btn title="Settings" v-if="loggedIn" flat :to="{ name: 'Settings' }">{{ this.$store.state.user }}</v-btn>
      <v-btn v-if="loggedIn" flat @click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState([
      'loggedIn'
    ])
  },
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
