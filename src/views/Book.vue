<template>
    <div id="app" class="app">
      <vuesence-book header-title="Ukraine Crisis Smart Book" :use-router="false" :article-lazy-load="true" />
    </div>
</template>
<script>

import VuesenceBook from '@vuesence/book'

export default {
  name: 'Book',
  components: {
    VuesenceBook
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  @import "../../node_modules/@vuesence/book/src/css/default.css";
  @import "../../node_modules/@vuesence/book/src/css/vuepress-style.css";
</style>
