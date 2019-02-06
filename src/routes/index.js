import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsList from '../views/NewsList.vue'
import AskList from '../views/AskList.vue'
import JobsList from '../views/JobsList.vue'
import ItemView from '../views/ItemView.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'News',
      component: NewsList,
    },
    {
      path: '/ask',
      name: 'Ask',
      component: AskList,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobsList,
    },
    {
      path: '/item/:id',
      name: 'Item',
      component: ItemView,
    },
    {
      path: '/user/:user',
      name: 'User',
      component: UserProfile,
    },

  ]
})
