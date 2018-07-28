<template lang="html">
  <v-card class="elevation-6">
    <v-toolbar dense dark class="teal darken-2">
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-toolbar-items>
        <slot name="toolbar-item"></slot>
      </v-toolbar-items>
    </v-toolbar>

    <div class="card-content">
      <slot>No slot content defined.</slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title',
    'toolbar-item'
  ]
}
</script>

<style lang="css">
.card-content {
  padding: 0.5rem;
}
</style>
