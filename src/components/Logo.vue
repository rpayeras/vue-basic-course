<template lang="html">
  <h1 class="logo">{{ appName | upper | capitalize }}</h1>
</template>

<script>
  export default {
    name: 'Logo',
    data () {
      return {
        appName: 'Curso Vue Js'
      }
    },
    filters: {
      upper (val) {
        if (!val) {
          return ''
        }
        return val.toUpperCase()
      },
      capitalize (val) {
        if (!val) {
          return ''
        }
        return val.charAt(0) + val.slice(1).toUpperCase()
      }
    }
  }
</script>

<style lang="css" scoped>
  .logo {
  }
</style>
