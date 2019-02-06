<template>
  <div>
    <template v-for="item in list">
      <div class="row">
        <span class="points">{{ item.points || 0 }}</span>
        <span class="title">
          <template v-if="item.url.startsWith('https')">
            <a :href="item.url">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="{ path: `/item/${item.id}` }">{{ item.title }}</router-link>
          </template>
          <br/>
          <small>
            {{ item.time_ago }}
            <span class="user">
              <template v-if="item.domain">
                in <a :href="item.domain">{{ item.domain }}</a>
              </template>
              <template v-else-if="item.user">
                by <router-link :to="{ path: `/user/${item.user}`}">{{ item.user }}</router-link>
              </template>
            </span>
          </small>
        </span>
      </div>

    </template>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,
  }
}
</script>
<style scoped>
.row {
  display: flex;
  padding: 10px 0px;
}
.points {
  width: 8%;
  font-size: 1.5rem;
  text-align: center;
}
.title {
  font-size: 1.2rem;
}
.user {
  font-weight: bold;
}
small {
  font-size: 0.7rem;

}
</style>
