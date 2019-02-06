<template>
  <div>
    <div v-for="item in comments" class="comment">
      <div class="user">
        {{ item.user }}
        in {{ item.time_ago }}
      </div>
      <p v-html="contentFilter(item.content)" class="content"></p>
      <div class="recomment">
        <comment :comments="item.comments" :answerFor="item.user"></comment>
      </div>
    </div>

  </div>
</template>
<script>
import Comment from './Comment.vue'

export default {
  name: 'Comment',
  components: {
    Comment,
  },
  methods: {
    contentFilter (content) {
      return this.answerFor ? content.replace('<p>', `<p><span style="font-weight:bold;">@${this.answerFor} </span>`) : content
    }
  },
  props: {
    comments: Array,
    answerFor: String,
  }
}
</script>
<style scoped>
.comment {
  margin: 5px 0px;
}
.user {
  font-weight: bold;
  font-size: 0.8rem;
}
.content {
  color: #3f3f3f;
  line-height: 19px;
}
.recomment {
  padding-left: 40px;
}
</style>
