const state = {
    searchValue: '',
    searchValueOld: '',
    loading: false,
    movies: [],
    errorMessage: null
}

const getters = {
    searchValue: state => {
        return state.searchValue
    },
    searchValueOld: state => {
        return state.searchValueOld
    },
    loading: state => {
        return state.loading
    },
    movies: state => {
        return state.movies
    },
    errorMessage: state => {
        return state.errorMessage
    }
}

const mutations = {
    SET_SEARCH_VALUE(state, payload) {
        state.searchValue = payload
    },
    SET_SEARCH_VALUE_OLD(state, payload) {
        state.searchValueOld = payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    },
    SET_MOVIES(state, payload) {
        state.movies = payload
    },
    SET_PAGE(state, payload) {
      state.page = payload
    },
    SET_ERROR_MESSAGE(state, payload) {
        state.errorMessage = payload
    },
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}