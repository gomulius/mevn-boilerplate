<template lang="html">
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <panel title="Posts">
          <v-btn
            flat
            absolute
            right
            slot="toolbar-item"
            :to="{ name: 'NewPost' }"
            >+ Add</v-btn>
          <table v-if="items != ''">
            <tr>
              <th>Date</th>
              <th>title</th>
              <th>body</th>
            </tr>
            <tr v-for="item in items" :key="item._id">
              <td>{{ item.date }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.body }}</td>
              <v-btn :to="{ name: 'ViewPost', params: { id: item._id } }">View</v-btn>
            </tr>
          </table>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AppService from '@/services/AppService'
import Panel from '@/components/Panel'
export default {
  name: 'Dashboard',
  components: {
    Panel
  },
  data () {
    return {
      items: null
    }
  },
  async mounted () {
    this.items = (await AppService.getPosts()).data
  }
}
</script>

<style lang="css">
</style>
