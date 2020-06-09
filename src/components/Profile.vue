<template lang="html">
  <section class="profile">
    <img v-bind:src="info.avatar_url" alt="" class="profile__photo">
    <h1 class="profile__name">{{ info.email }}</h1>
    <h2 class="profile__blog">{{ info.blog }}</h2>
    div.profile__
  </section>
</template>

<script>
  import axios from 'axios'

  export default{
    name: 'Profile',
    props: {
      user: {
        type: String,
        required: true
      }
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
    methods: {
      getUserData () {
        console.log(process.env.API)

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
      }
    },
    mounted () {
      console.log('Mounted')
      console.log(this.$route)

      this.getUserData()
    },
    updated () {
      console.log('Updated')
      console.log(this.$route)
    },
    watch: {
      '$route': 'getUserData'
    },
    beforeRouteEnter (to, from, next) {
      console.log('Profile before route enter')
      next()
    },
    beforeRouteUpdate (to, from, next) {
      console.log('Profile before route update')
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('Profile before leave')
      next()
    }
  }
</script>
