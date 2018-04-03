<template lang="html">
  <div>
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
      username: '',
      error: null
    }
  },
  methods: {
    async register (e) {
      e.preventDefault()
      try {
        await AuthService.register({
          username: this.username,
          password: this.password,
          email: this.email
        })
      } catch (e) {
        this.error = e.response.data
      }
    }
  }
}
</script>

<style lang="css">
</style>
