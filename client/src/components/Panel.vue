<template lang="html">
  <v-card class="elevation-6">
    <v-toolbar dense dark class="teal darken-2">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>

    <v-container>
      <slot>No slot content defined.</slot>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title'
  ]
}
</script>

<style lang="css">
</style>
