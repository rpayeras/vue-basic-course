import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  bookmarks: []
}

const getters = {
  bookmarks: state => state.bookmarks
}

const store = new Vuex.Store({
  state,
  getters
})

export default store
