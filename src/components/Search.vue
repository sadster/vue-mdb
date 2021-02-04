<template>
  <form class="search">
    <input
        @change="handleSearchInputChanges"
        type="text"
        :value="searchValue"
    >
    <input
        @click.prevent="callSearchFunction"
        type="submit"
        value="SEARCH"
    >
  </form>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Search",
  props: {
    search: Function
  },
  computed: {
    ...mapGetters(['searchValue'])
  },
  methods: {
    handleSearchInputChanges(e) {
      this.$store.commit('SET_SEARCH_VALUE', e.target.value)
    },
    resetInputField() {
      this.$store.commit('SET_SEARCH_VALUE', '')
    },
    callSearchFunction() {
      this.search(this.searchValue, this.page)
    }
  }
}
</script>

<style scoped>

</style>