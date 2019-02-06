<template>
  <div id="app">
    <toolbar></toolbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  components: {
    Toolbar,
  },
  created () {

  }
}
</script>

<style>
#app {
  width: 100%;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
