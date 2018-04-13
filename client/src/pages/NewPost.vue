<template lang="html">
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>

      <panel title="New Post">

        <v-alert outline transition="scale-transition" color="error" icon="warning" :value="!!error">{{ error }}</v-alert>
        <v-alert outline transition="scale-transition" color="success" icon="check_circle" :value="!!message">{{ message }}</v-alert>

        <v-form v-model="valid" ref="form" lazy-validation @submit="newPost">
          <v-text-field
          v-model="form.title"
          type="text"
          label="Enter title:"
          required
          :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
          v-model="form.body"
          textarea
          label="Enter body:"
          required
          :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
          v-model="form.date"
          type="date"
          label="Enter date:"
          required
          :rules="[rules.required]"
          ></v-text-field>

          <v-btn type="submit" :disabled="!valid">Submit New Post</v-btn>
          <v-btn :to="{ name: 'Dashboard' }">Cancel</v-btn>
        </v-form>
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import AppService from '@/services/AppService'
import Panel from '@/components/Panel'
import { mapState } from 'vuex'
export default {
  name: 'NewPost',
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
        title: '',
        body: '',
        date: ''
      },
      rules: {
        required: v => !!v || 'Required.'
      }
    }
  },
  methods: {
    async newPost (e) {
      e.preventDefault()
      this.$store.dispatch('setError', null)
      this.$store.dispatch('setMessage', null)
      if (this.$refs.form.validate()) {
        try {
          const newPostResponse = await AppService.newPost(this.form)
          this.$store.dispatch('setMessage', newPostResponse.data.message + ' ... Redirecting')
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
