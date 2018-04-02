<template lang="html">
  <div class="">
    <h1>Register</h1>

    <form @submit="register">
      <input v-model='email' type="email" name="email" placeholder="Enter email">
      <input v-model='password' type="password" name="password" placeholder="Enter Password">
      <input v-model='username' type="username" name="username" placeholder="Enter username">
      <input type="submit" name="register" value="">
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    async register (e) {
      e.preventDefault()
      let response = await AuthService.register({
        username: this.username,
        password: this.password,
        email: this.email
      })
      console.log(response)
    }
  }
}
</script>

<style lang="css">
</style>
