<template lang="html">
  <v-container fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm8 md6>
        <v-card class="elevation-6">
          <v-toolbar dark class="teal darken-2">
            <v-toolbar-title color="white">Registration Form</v-toolbar-title>
          </v-toolbar>

          <v-container>
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
          </v-container>
        </v-card>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  name: 'Register',
  data () {
    return {
      valid: true,
      email: '',
      emailCheck: '',
      password: '',
      username: '',
      error: null,
      rules: {
        required: v => !!v || 'Required.',
        email: v => v === this.email || 'Please check your email address.'
      }
    }
  },
  methods: {
    async register (e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
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
}
</script>

<style lang="css">
</style>
