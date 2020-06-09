<template lang="html">
  <div class="developer">
    <div class="developer__avatar">
      <img class="developer__avatar--img" v-bind:src="avatar" alt="">
    </div>
    <div class="developer__content">
      <h1 class="developer__content--title">{{ name }}</h1>
      <h2 class="developer__content--login">{{ login }}</h2>
      <h3 class="developer__content--email">{{ email }}</h3>
      <p class="developer__content--repos">{{ repos }}</p>
      <p class="developer__content--gists" v-if="gists">{{ gists }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Developer',
    props: {
      avatar: {
        type: String,
        required: true,
        default: null,
        validator (value) {
          return value.startsWith('http')
        }
      },
      name: {
        type: String,
        required: true
      },
      login: {
        type: String,
        required: true
      },
      email: {
        type: String
      },
      company: {
        type: String
      },
      repos: {
        type: Number
      },
      gists: {
        type: Number
      }
    },
    computed: {
      metadata () {
        let meta = ''

        if (this.email) {
          meta = `$(meta) $(this.email)`
        }

        if (this.location) {
          meta = `$(meta) $(this.location)`
        }

        if (this.company) {
          meta = `$(meta) $(this.company)`
        }

        return meta
      },
      othermeta: {
        get () {
          let meta = ''

          if (this.email) {
            meta = `$(meta) $(this.email)`
          }

          if (this.location) {
            meta = `$(meta) $(this.location)`
          }

          if (this.company) {
            meta = `$(meta) $(this.company)`
          }

          return meta
        }
      }
    },
    watch: {
      metadata (newValue) {
        console.log(newValue)
      }
    },
    mounted () {
      console.log('CoDeveloper mounted')
    }
  }
</script>


<style lang="scss" scoped>
  .developer{
    &__avatar{
      img{
        border-radius: 50%;
      }
      margin: 10px;
    }
    &__content{
      &--title{
        font-weight: bold;
      }
    }
  }
</style>
