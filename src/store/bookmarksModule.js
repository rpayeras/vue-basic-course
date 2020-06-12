import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  bookmarks: localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : []
}

const getters = {
  bookmarks: (state) => {
    return state.bookmarks
  },
  isSelected: state => login => state.bookmarks.some(bookmark => bookmark.id === login)
}

const mutations = {
  EDIT_BOOKMARKS (state, bookmark) {
    if (state.bookmarks.some(item => item.id === bookmark.id)) {
      state.bookmarks = state.bookmarks.filter(item => item.id !== bookmark.id)
    } else {
      state.bookmarks.push(bookmark)
    }
  }
}

const actions = {
  modify ({ commit, state }, bookmark) {
    commit('EDIT_BOOKMARKS', bookmark)

    window.localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
  }
}

export default {
  namespaced: true, state, getters, mutations, actions
}
