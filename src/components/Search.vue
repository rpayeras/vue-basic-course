<template lang="html">
  <input
    type="text"
    name="search"
    placeholder="Write an user"
    class="search"
    v-model="criteria"
    v-on:keyup.enter="onSearch" v-focus>
</template>

<script>
  import bus from '@/busdata'

  export default {
    name: 'Search',
    data () {
      return {
        criteria: '',
        show: false
      }
    },
    methods: {
      onSearch () {
        bus.$emit('search', this.criteria)
      }
    },
    watch: {
      // criteria () {
      //   // this.$emit('search', this.criteria)
      //   bus.$emit('search', this.criteria)
      // }
    }
  }
</script>

<style lang="css">

</style>
