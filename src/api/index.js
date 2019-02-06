import axios from 'axios'

const API_ROOT = 'https://api.hnpwa.com/v0'

export function fetch_news () {
  return axios.get(`${API_ROOT}/news/1.json`)
}

export function fetch_ask () {
  return axios.get(`${API_ROOT}/ask/1.json`)
}
export function fetch_jobs () {
  return axios.get(`${API_ROOT}/jobs/1.json`)
}
export function fetch_item (id) {
  return axios.get(`${API_ROOT}/item/${id}.json`)
}
export function fetch_user (user) {
  return axios.get(`${API_ROOT}/user/${user}.json`)
}
