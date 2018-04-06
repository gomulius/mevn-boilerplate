<template lang="html">
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>

      <panel title="Login Form">
        <v-alert outline transition="scale-transition" color="error" icon="warning" :value="!!error">{{ error }}</v-alert>
        <v-alert outline transition="scale-transition" color="success" icon="check_circle" :value="!!message">{{ message }}</v-alert>

        <v-form v-model="valid" ref="form" lazy-validation @submit="login">
          <v-text-field
          v-model="username"
          type="text"
          label="Enter username:"
          :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
          v-model="password"
          type="password"
          label="Enter password:"
          :rules="[rules.required]"
          ></v-text-field>
          <v-btn type="submit" :disabled="!valid">Login</v-btn>
        </v-form>
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
import Panel from '@/components/Panel'
import getUser from '@/mixins/getUser'
export default {
  name: 'Login',
  components: {
    Panel
  },
  data () {
    return {
      valid: true,
      password: '',
      username: '',
      error: null,
      message: null,
      rules: {
        required: v => !!v || 'Required.'
      }
    }
  },
  methods: {
    async login (e) {
      e.preventDefault()
      this.error = null
      this.message = null
      if (this.$refs.form.validate()) {
        try {
          const loginResponse = await AuthService.login({
            username: this.username,
            password: this.password
          })
          this.$store.dispatch('setToken', loginResponse.data.token)
          const jwtVerifyResponse = await getUser({
            token: this.$store.state.token
          })
          this.$store.dispatch('setUser', jwtVerifyResponse.data.username)
          this.message = loginResponse.data.message
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
