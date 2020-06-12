<template lang="html">
  <button class="star__set" v-bind:class='{"star__set--selected" : selected}' v-on:click='onClick()'>
    <template v-if="selected">
      STAR
    </template>
    <template v-else>
      NOSTAR
    </template>
  </button>
</template>

<script>
  export default {
    name: 'Star',
    props: {
      selected: {
        type: Boolean,
        required: false,
        default: false
      },
      clicked: {
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
        this.$emit('clicked')
      }
    }
  }
</script>
