<template lang="html">
  <div class="app">
    <header>
      <Logo></Logo>
      <nav class="menu logo">
        <Search v-on:search="onSearch"></Search>
      </nav>
    </header>
    <main class="app__content">
      <aside>
        <Bookmarks></Bookmarks>
      </aside>
      <section>
          <Developers></Developers>
      </section>
    </main>
  </div>
</template>

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
  @import 'assets/css/global.css';
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
