<template>
  <div>
    <list :list="this.$store.state.news"></list>
  </div>
</template>
<script>
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  created () {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>
