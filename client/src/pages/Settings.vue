<template lang="html">
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>

      <panel :title="user.username + '\'s Profile'">
        <table class="usertable">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>*************</td>
          </tr>
        </table>
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import { mapState } from 'vuex'
export default {
  name: 'Settings',
  components: {
    Panel
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
.usertable {
  width: 100%;
  padding: 5px 0;
}

.usertable th, .usertable td {
  text-align: left;
  padding: 0 10px;
}
</style>
