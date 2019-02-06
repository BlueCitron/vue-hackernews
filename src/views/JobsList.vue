<template>
  <div>
    <list :list="this.$store.state.jobs"></list>
  </div>
</template>
<script>
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  created () {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>
