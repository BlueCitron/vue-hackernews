<template>
  <div>
    <list :list="this.$store.state.ask"></list>
  </div>
</template>
<script>
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  created () {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>
