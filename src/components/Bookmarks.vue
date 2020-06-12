<template lang="html">
  <ul class="bookmarks" v-if="list.length">
    <li v-for="item in list" class="bookmarks__item">
      <Bookmark v-bind:id="item.id" v-bind:name="item.name"></Bookmark>
    </li>
  </ul>
  <span v-else>No hay registros de bookmarks</span>
</template>

<script>
  import Bookmark from '../components/Bookmark'

  export default {
    name: 'Bookmarks',
    components: {
      Bookmark
    },
    mounted () {
    },
    computed: {
      list () {
        return this.$store.getters.bookmarks
      }
    }
  }
</script>

<style lang="css">

</style>
