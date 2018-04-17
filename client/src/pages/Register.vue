<template lang="html">
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>

      <panel title="Register Form">
        <v-alert outline transition="scale-transition" color="error" icon="warning" :value="!!error">{{ error }}</v-alert>
        <v-alert outline transition="scale-transition" color="success" icon="check_circle" :value="!!message">{{ message }}</v-alert>

        <v-form v-model="valid" ref="form" lazy-validation @submit="register">
          <v-text-field
          v-model="form.username"
          type="text"
          label="Enter username:"
          :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
          v-model="form.password"
          :append-icon="visible ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (visible = !visible)"
          :type="visible ? 'text' : 'password'"
          label="Enter password:"
          :rules="[rules.required, rules.password]"
          ></v-text-field>
          <v-text-field
          v-model="form.email"
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
import { mapState } from 'vuex'
export default {
  name: 'Register',
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
      visible: false,
      form: {
        email: '',
        password: '',
        username: ''
      },
      emailCheck: '',
      rules: {
        required: v => !!v || 'Required.',
        email: v => v === this.form.email || 'Please check your email address.',
        password: v => /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/.test(v) || 'Password must contain at least one lowercase, one uppercase, one number, one special character, and must have between 8 and 35 characters'
      }
    }
  },
  methods: {
    async register (e) {
      e.preventDefault()
      this.$store.dispatch('setError', null)
      this.$store.dispatch('setMessage', null)
      if (this.$refs.form.validate()) {
        try {
          const registerResponse = await AuthService.register(this.form)
          this.$store.dispatch('setToken', registerResponse.data.token)
          const jwtVerifyResponse = await AuthService.getUser({
            token: this.$store.state.token
          })
          this.$store.dispatch('setUser', jwtVerifyResponse.data)
          this.$store.dispatch('setMessage', registerResponse.data.message + ' ... Redirecting')
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
