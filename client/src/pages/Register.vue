<template lang="html">
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>

      <panel title="Register Form">
        <v-alert outline transition="scale-transition" color="error" icon="warning" :value="!!error">{{ error }}</v-alert>
        <v-alert outline transition="scale-transition" color="success" icon="check_circle" :value="!!message">{{ message }}</v-alert>

        <v-form v-model="valid" ref="form" lazy-validation @submit="register">
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
          <v-text-field
          v-model="email"
          type="email"
          label="Enter email address:"
          :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
          v-model="emailCheck"
          type="email"
          label="Enter email address again"
          :rules="[rules.required, rules.email]"
          ></v-text-field>
          <v-btn type="submit" :disabled="!valid">Register</v-btn>
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
  name: 'Register',
  components: {
    Panel
  },
  data () {
    return {
      valid: true,
      email: '',
      emailCheck: '',
      password: '',
      username: '',
      error: null,
      message: null,
      rules: {
        required: v => !!v || 'Required.',
        email: v => v === this.email || 'Please check your email address.'
      }
    }
  },
  methods: {
    async register (e) {
      e.preventDefault()
      this.error = null
      this.message = null
      if (this.$refs.form.validate()) {
        try {
          const registerResponse = await AuthService.register({
            username: this.username,
            password: this.password,
            email: this.email
          })
          this.$store.dispatch('setToken', registerResponse.data.token)
          const jwtVerifyResponse = await getUser({
            token: this.$store.state.token
          })
          this.$store.dispatch('setUser', jwtVerifyResponse.data.username)
          this.message = registerResponse.data.message
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
