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
export default {
  name: 'Login',
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
  components: {
    Panel
  },
  methods: {
    async login (e) {
      e.preventDefault()
      this.error = null
      this.message = null
      if (this.$refs.form.validate()) {
        try {
          const response = await AuthService.login({
            username: this.username,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.message = response.data.message
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
