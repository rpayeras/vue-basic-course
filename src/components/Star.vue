<template lang="html">
  <div class="star">
    <button class="star__set" v-bind:class='{"star__set--selected" : selected}' v-on:click='onClick()' v-bind:title="test"></button>
    <template v-if="selected">
      STAR
    </template>
    <template v-else>
      NOSTAR
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Star',
    props: {
      selected: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      text () {
        return this.selected ? 'Add bookmark' : 'Delete bookmark'
      }
    },
    methods: {
      onClick () {
        this.$emit('star:clicked')
      }
    }
  }
</script>
