<template>
  <header class="header">
    <h2>{{ headerText }}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    headerText: String
  }
}
</script>

<style scoped>
</style>