import Vue from 'vue'
import Vuex from 'vuex'
import bookmarksModule from './bookmarksModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bookmarksModule
  },
  strict: true
})

export default store
