<template lang="html">
  <v-layout align-center justify-center>

    <v-flex xs12 sm8 md6>
      <v-card class="elevation-6">
        <v-toolbar dense dark class="teal darken-2">
          <v-toolbar-title>Registration Form</v-toolbar-title>
        </v-toolbar>

        <v-container>

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
        </v-container>
      </v-card>

    </v-flex>

  </v-layout>
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
          const response = await AuthService.register({
            username: this.username,
            password: this.password,
            email: this.email
          })
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
