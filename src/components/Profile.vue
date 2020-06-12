<template lang="html">
  <section class="profile">
    <img v-bind:src="info.avatar_url" alt="" class="profile__photo">
    <h1 class="profile__name">{{ info.email }}</h1>
    <h2 class="profile__blog">{{ info.blog }}</h2>
    <Star v-bind:selected="isSelected" v-on:clicked="onBookmark"></Star>
  </section>
</template>

<script>
  import axios from 'axios'
  import Star from './Star'

  export default{
    name: 'Profile',
    props: {
      user: {
        type: String,
        required: true
      }
    },
    components: {
      Star
    },
    data () {
      return {
        info: {
          followers: 0,
          following: 0,
          public_repos: 0,
          public_gists: 0
        }
      }
    },
    computed:
    {
      isSelected () {
        return this.$store.getters['bookmarksModule/isSelected'](this.info.login)
      }
    },
    methods: {
      getUserData () {
        return axios(
          {
            method: 'GET',
            url: `${process.env.API}users/${this.user}`,
            headers: { 'Authorization': `token ${process.env.TOKEN}` }
          })
          .then(response => response.data)
          .then(user => {
            this.info = user
          })
      },
      onBookmark () {
        this.$store.dispatch('bookmarksModule/modify', {
          id: this.info.login,
          name: this.info.name
        })
      }
    },
    mounted () {
      this.getUserData()
    },
    updated () {
    },
    watch: {
      '$route': 'getUserData'
    },
    beforeRouteEnter (to, from, next) {
      next()
    },
    beforeRouteUpdate (to, from, next) {
      next()
    },
    beforeRouteLeave (to, from, next) {
      next()
    }
  }
</script>
