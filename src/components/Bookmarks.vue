<template lang="html">
  <ul class="bookmarks" v-if="bookmarks.length">
    <li v-for="item in bookmarks" class="bookmarks__item">
      <Bookmark v-bind:id="item.id" v-bind:name="item.name"></Bookmark>
    </li>
  </ul>
  <span v-else>No hay registros de bookmarks</span>
</template>

<script>
  import Bookmark from '../components/Bookmark'
  import BookmarksMock from '../mocks/Bookmarks'

  export default {
    name: 'Bookmarks',
    data () {
      return {
        bookmarks: BookmarksMock
      }
    },
    components: {
      Bookmark
    },
    created () {

    },
    mounted () {
      console.log('Bookmarks mounted')
    }
  }
</script>

<style lang="css">

</style>
