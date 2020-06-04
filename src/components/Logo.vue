<template lang="html">
  <h1 class="logo">{{ appName }}</h1>
</template>

<script>
  export default {
    name: 'Logo',
    data () {
      return {
        appName: 'App omg wtf'
      }
    }
  }
</script>

<style lang="css" scoped>
  .logo {
    background-color: red;
  }
</style>
