<template lang="html">
  <v-layout>
    <panel title="Posts">
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
          </tr>
        </table>
    </panel>
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
      items: []
    }
  },
  async mounted () {
    this.items = (await AppService.getPosts()).data
  }
}
</script>

<style lang="css">
</style>
