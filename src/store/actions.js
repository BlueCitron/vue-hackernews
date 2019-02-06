import {
  fetch_news,
  fetch_ask,
  fetch_jobs,
  fetch_item,
  fetch_user,
} from '../api/index.js'

const handleError = (err) => {
  console.error(err)
}

export default {
  FETCH_NEWS ({ commit }) {
    fetch_news()
      .then( ({ data }) => {
        commit('SET_NEWS', data)
      })
      .catch(handleError)
  },
  FETCH_ASK ({ commit }) {
    fetch_ask()
      .then( ({ data }) => {
        commit('SET_ASK', data)
      })
      .catch(handleError)
  },
  FETCH_JOBS ({ commit }) {
    fetch_jobs()
      .then( ({ data }) => {
        commit('SET_JOBS', data)
      })
      .catch(handleError)
  },
  FETCH_ITEM ({ commit }, { id }) {
    fetch_item(id)
      .then( ({ data }) => {
        commit('SET_ITEM', data)
      })
      .catch(handleError)
  },
  FETCH_USER ({ commit }, { user }) {
    fetch_user(user)
      .then( ({ data }) => {
        commit('SET_USER', data)
      })
      .catch(handleError)
  },
}
