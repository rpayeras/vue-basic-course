<template lang="html">
  <transition name="fade" v-if="show">
    <ul class="developers">
      <li v-for="user in users" class="developer__item" v-bind:class="{ 'userConNombre': user.name === false}">
        <router-link v-bind:to="{ name: 'profile', params: { user: user.login } }">
          <Developer v-bind:avatar="user.avatar_url" v-bind:name="user.name" v-bind:company="user.company" v-bind:email="user.email" v-bind:gists="user.public_gists" v-bind:login="user.login" v-bind:repos="user.public_repos"></Developer>
        </router-link>
      </li>
    </ul>
  </transition>
</template>

<script>
  import bus from '@/busdata'
  import Developer from '../components/Developer'
  import http from 'axios'

  export default {
    name: 'Developers',
    data () {
      return {
        users: {},
        show: false
      }
    },
    components: {
      Developer
    },
    created () {
      bus.$on('search', criteria => {
        this.show = true
      })
    },
    mounted () {
      this.getTopUsers()
      bus.$emit('search', '')
    },
    methods: {
      getTopUsers () {
        // return fetch(`${process.env.API}search/users?q=language:javascript&order=desc&per_page=15`,
        //   {
        //     headers: {
        //       'Authorization': `token ${process.env.TOKEN}`
        //     }
        //   }
        // )
        //   .then(response => response.json())
        //   .then(response => response.items)
        //   .then(users => users.map(user => fetch(`${process.env.API}users/${user.login}`, {
        //     headers: {
        //       'Authorization': `token ${process.env.TOKEN}`
        //     }
        //   }).then(response => response.json())
        //   )).then(response => Promise.all(response))
        //   .then(users => {
        //     this.users = users
        //   })

        return http({
          method: 'GET',
          url: `${process.env.API}search/users`,
          params: {
            q: 'language:javascript',
            order: 'desc',
            per_page: 15
          },
          headers: {
            'Authorization': `token ${process.env.TOKEN}`
          }
        })
          .then(response => response.data)
          .then(response => response.items)
          .then(users => users.map(user => http({
            method: 'GET',
            url: `${process.env.API}users/${user.login}`,
            headers: {
              'Authorization': `token ${process.env.TOKEN}`
            }
          }).then(response => response.data)
          )).then(response => Promise.all(response))
          .then(users => {
            this.users = users
          })
      }
    }
  }
</script>

<style lang="scss">
  .developers{
    padding: 0;

    .developer{
      background-color: #f7f5f5;

      img{
        width:50px;
      }

      &__item{
        list-style: none;
        margin-bottom: 10px;
        width: 100%;

        a{
          text-decoration: none;
          color: black;
        }


      }

      &:hover{
        background-color: white;
      }

      padding: 10px;
    }
  }
</style>
