<template lang="html" src="./App.html"></template>

<script>
  import Logo from '@/components/Logo'
  import Search from './components/Search'
  import Loading from './components/Loading'
  import LoadingError from './components/LoadingError'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      Search,
      Logo,
      Developers: () => ({
        component: import('./components/Developers'),
        delay: 400,
        timeout: 5000,
        loading: Loading,
        error: LoadingError
      }),
      Bookmarks: () => ({
        component: import('./components/Bookmarks'),
        delay: 400,
        timeout: 5000,
        loading: Loading,
        error: LoadingError
      })
    },
    methods: {
      onSearch (criteria) {
        console.log('App component', criteria)
      }
    }
  }
</script>

<style lang="css">
  @import 'assets/css/colors.css';
  .logo{
    color: var(--color-light-black);
  }

  .userConNombre{
    background-color: var(--color-light-black);
  }

</style>
<style lang="css" scoped>

</style>
