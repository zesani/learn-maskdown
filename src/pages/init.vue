<template lang="html">
  <div class="">
    <div id="editor">
      <textarea v-model="input"></textarea>
      {{input}}
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
/* global marked */
export default {
  data () {
    return {
      input: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    // update: _.debounce(function (e) {
    //   this.input = e.target.value
    // }, 300)
  }
}

</script>

<style lang="css">
</style>
