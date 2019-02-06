<template>
  <div class="container">
    <ul>
      <li class="home">
        <router-link :to="{ path: '/' }">Hacker News</router-link>
      </li>
      <li v-for="item in menu">
        <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          name: 'News',
          path: '/news',
        },
        {
          name: 'Ask',
          path: '/ask',
        },
        {
          name: 'Jobs',
          path: '/jobs',
        },
      ]
    }
  },
}
</script>

<style scoped>
.container {
  background: #ff6600;
  color: #6b6b6b;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin: 5px 20px;
  cursor: pointer;
}
a {
  color: #6b6b6b;
}
.home {
  font-size: 2rem;
}
</style>
