<template lang="html">
  <transition name="fade" v-if="show">
    <ul class="developers">
      <li v-for="user in users" class="developer__item" v-bind:class="{ 'userConNombre': user.name === false}">
        <Developer v-bind:avatar="user.avatar" v-bind:name="user.name" v-bind:company="user.company" v-bind:email="user.email" v-bind:gists="user.gists" v-bind:login="user.login" v-bind:repos="user.repos"></Developer>
      </li>
    </ul>
  </transition>
</template>

<script>
  import bus from '@/busdata'
  import Developer from '../components/Developer'
  import UsersMock from '../mocks/Users'

  export default {
    name: 'Developers',
    data () {
      return {
        users: UsersMock,
        show: false
      }
    },
    components: {
      Developer
    },
    created () {
      bus.$on('search', criteria => {
        console.log('Developers', criteria)
        this.show = true
      })
    },
    mounted () {
      console.log('Developers mounted')
    }
  }
</script>

<style lang="css">

</style>
