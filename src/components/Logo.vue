<template lang="html">
  <h1 class="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="">{{ appName | upper | capitalize }}</h1>
</template>

<script>
  export default {
    name: 'Logo',
    data () {
      return {
        appName: ''
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

<style lang="scss" scoped>
  .logo {
    img{
      width: 50px;
    }
  }
</style>
