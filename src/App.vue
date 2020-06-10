<template lang="html">
  <div class="app">
    <header>
      <Logo></Logo>
      <nav class="menu logo">
        <ul>
          <li>
            <router-link v-bind:to="{ name: 'home' }">
              <a href="">Home</a>
            </router-link>
          </li>
        </ul>
      </nav>
      <Search v-on:search="onSearch"></Search>
    </header>
    <main class="app__content">
      <aside>
        <h2>Bookmarks list</h2>
        <Bookmarks></Bookmarks>
      </aside>
      <aside>
        <h2>Developers list</h2>
        <Developers></Developers>
      </aside>
      <section>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import Search from './components/Search'
  import Loading from './components/Loading'
  import LoadingError from './components/LoadingError'
  import Developers from './components/Developers'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      Search,
      Logo,
      Developers,
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
    font-family: "Trebuchet MS";

  }

  .userConNombre{
    background-color: var(--color-light-black);
  }

</style>
<style lang="scss" scoped>
  .app{
    &__content{
      display: flex;
      flex-direction: row;
      width: 50%;
      margin: auto;
    }
  }
</style>
