<template lang="html">
  <ul class="bookmarks" v-if="list.length">
    <li v-for="item in list" class="bookmarks__item">
      <Bookmark v-bind:id="item.id" v-bind:name="item.name"></Bookmark>
    </li>
  </ul>
  <span v-else>No hay registros de bookmarks</span>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Bookmark from '../components/Bookmark'

  export default {
    name: 'Bookmarks',
    data () {
      return {
      }
    },
    components: {
      Bookmark
    },
    created () {

    },
    mounted () {
      console.log('Bookmarks mounted')
    },
    computed () {
      Object.assign(mapGetters({
        list: 'bookmarks'
      }))
    }
  }
</script>

<style lang="css">

</style>
