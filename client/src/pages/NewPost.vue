<template lang="html">
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>

      <panel title="New Post">

      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AppService from '@/services/AppService'
export default {
  name: 'NewPost',
  components: {
    Panel
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
