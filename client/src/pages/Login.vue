<template lang="html">
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>

      <panel title="Login Form">
        <v-alert outline transition="scale-transition" color="error" icon="warning" :value="!!error">{{ error }}</v-alert>
        <v-alert outline transition="scale-transition" color="success" icon="check_circle" :value="!!message">{{ message }}</v-alert>

        <v-form v-model="valid" ref="form" lazy-validation @submit="login">
          <v-text-field
          v-model="form.username"
          type="text"
          label="Enter username:"
          :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
          v-model="form.password"
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
import { mapState } from 'vuex'
export default {
  name: 'Login',
  components: {
    Panel
  },
  computed: {
    ...mapState([
      'message',
      'error'
    ])
  },
  data () {
    return {
      valid: true,
      form: {
        username: '',
        password: ''
      },
      rules: {
        required: v => !!v || 'Required.'
      }
    }
  },
  methods: {
    async login (e) {
      e.preventDefault()
      this.$store.dispatch('setError', null)
      this.$store.dispatch('setMessage', null)
      if (this.$refs.form.validate()) {
        try {
          const loginResponse = await AuthService.login(this.form)
          this.$store.dispatch('setToken', loginResponse.data.token)
          const jwtVerifyResponse = await AuthService.getUser({
            token: this.$store.state.token
          })
          this.$store.dispatch('setUser', jwtVerifyResponse.data)
          this.$store.dispatch('setMessage', loginResponse.data.message + ' ... Redirecting')
          setTimeout(() => {
            this.$router.push({ name: 'Dashboard' })
          }, 2000)
        } catch (e) {
          this.$store.dispatch('setError', e.response.data.message)
        }
      }
    }
  },
  mounted () {
    this.$store.dispatch('setError', null)
    this.$store.dispatch('setMessage', null)
  }
}
</script>

<style lang="css">
</style>
