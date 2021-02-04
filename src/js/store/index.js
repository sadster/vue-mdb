import Vue from 'vue'
import Vuex from 'vuex'
import search from '@/js/store/modules/search'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        search
    }
})