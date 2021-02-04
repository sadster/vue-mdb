<template>
  <div id="app">
    <Header header-text="VUE-MDB"></Header>
    <Search :search="search"></Search>
    <p class="intro">Take a look at some of our favorite movies</p>
    <span
        class="loading"
        v-if="loading && !errorMessage"
    >loading...</span>
    <div class="movies">
      <div
          class="errorMessage"
          v-if="errorMessage"
      >{{ errorMessage }}</div>
      <transition-group name="fade" tag="div">
        <Movie
            :key="movie.imdbID"
            :posterSrc="movie.Poster"
            :title="movie.Title"
            v-for="movie in movies"
            :year="movie.Year"
        ></Movie>
      </transition-group>
    </div>
    <button
        class="show-btn"
        @click="setPage"
        v-if="movies.length"
    >show more</button>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Search from '@/components/Search'
import Movie from '@/components/Movie'
import Axios from 'axios'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Movie,
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters(['loading', 'errorMessage', 'movies', 'searchValue', 'searchValueOld'])
  },
  methods: {
    search(searchValue) {
      this.$store.commit('SET_LOADING', true)
      this.$store.commit('SET_ERROR_MESSAGE', null)
      if (this.searchValue !== this.searchValueOld) {
        this.page = 1
      }
      Axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=e2331d96&page=` + this.page)
        .then(response => {
          if (response.data.Response === 'True') {
            this.$store.commit('SET_SEARCH_VALUE_OLD', this.searchValue)
            this.$store.commit('SET_MOVIES', response.data.Search)
            this.$store.commit('SET_LOADING', false)
          } else {
            this.$store.commit('SET_MOVIES', [])
            this.$store.commit('SET_ERROR_MESSAGE', response.data.Error)
            this.$store.commit('SET_LOADING', false)
          }
        })
    },
    setPage() {
      this.page += 1
      this.search(this.searchValue, this.page)
    }
  },
}
</script>

<style>
#app {
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
