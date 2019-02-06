<template>
  <div class="container">
    <div class="title">
      {{ item.title }}
    </div>
    <div class="info">
      {{ item.time_ago }}
      by <router-link :to="{ path: `/user/${item.user}` }">{{ item.user }}</router-link>
    </div>

    <hr/>

    <section v-html="item.content">
    </section>

    <hr/>

    <comment :comments="item.comments"></comment>

  </div>
</template>
<script>
import Comment from '../components/Comment.vue'

export default {
  components: {
    Comment,
  },
  computed: {
    item () {
      return this.$store.state.item
    }
  },
  async created () {
    const { id } = this.$route.params
    await this.$store.dispatch('FETCH_ITEM', { id })
    const { user } = this.$store.state.item
    if (user) {
      await this.$store.dispatch('FETCH_USER', { user })
    }
  }
}
</script>
<style scoped>
.container {
  padding: 20px 60px;
  color: #5e5e5e;
}
.title {
  font-size: 1.5rem;
}
.info {
  font-size: 0.8rem;
}
section {
  padding: 10px 0px;
}
</style>
