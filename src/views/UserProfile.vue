<template>
  <div>
    <div>
      <span>NickName </span>
      <span>{{ user.id }}</span>
    </div>
    <div>
      <span>Karma </span>
      <span>{{ user.karma }}</span>
    </div>
    <div>
      <span>Created </span>
      <span>{{ user.created }}</span>
    </div>
    <div>
      <span>About </span>
      <div v-html="user.about"></div>
    </div>

  </div>
</template>
<script>
export default {
  computed : {
    user () {
      return this.$store.state.user
    }
  },
  created () {
    const { user } = this.$route.params
    this.$store.dispatch('FETCH_USER', { user })
  }
}
</script>
<style scoped>
span {
  font-weight: bold;
  font-size: 2rem;
}
</style>
