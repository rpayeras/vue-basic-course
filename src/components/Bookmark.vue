<template lang="html">
  <div class="bookmark">
    <div class="bookmark__content">
      <h1 class="bookmark__content--title">{{ id }}</h1>
      <h2 class="bookmark__content--login">{{ name }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bookmark',
    props: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    mounted () {
      console.log('Cobookmark mounted')
    }
  }
</script>
