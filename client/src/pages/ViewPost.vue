<template lang="html">
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>

      <panel :title="form.title">
        <v-alert outline transition="scale-transition" color="error" icon="warning" :value="!!error">{{ error }}</v-alert>
        <v-alert outline transition="scale-transition" color="success" icon="check_circle" :value="!!message">{{ message }}</v-alert>

        <v-form v-model="valid" ref="form" lazy-validation @submit="editPost">
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

          <v-btn type="submit" :disabled="!valid">Update Post</v-btn>
          <v-btn :to="{ name: 'Dashboard' }">Cancel</v-btn>
        </v-form>
      </panel>

  </v-flex>
  </v-layout>
</template>

<script>
import AppService from '@/services/AppService'
import Panel from '@/components/Panel'
export default {
  name: 'ViewPost',
  components: {
    Panel
  },
  data () {
    return {
      valid: true,
      form: {
        id: '',
        title: '',
        body: '',
        date: ''
      },
      rules: {
        required: v => !!v || 'Required.'
      },
      message: null,
      error: null
    }
  },
  async mounted () {
    const post = (await AppService.showPost({
      id: this.$route.params.id
    })).data
    this.form.id = post._id
    this.form.title = post.title
    this.form.body = post.body
  },
  methods: {
    async editPost (e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        try {
          const editPostResponse = await AppService.editPost(this.form)
          this.message = editPostResponse.data.message
          this.message = '... Redirecting to dashboard.'
          setTimeout(() => {
            this.$router.push({ name: 'Dashboard' })
          }, 2000)
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
