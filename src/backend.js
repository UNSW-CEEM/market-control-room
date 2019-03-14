import axios from 'axios'

let $axios = axios.create({
  baseURL: '/api/',
  // timeout: 5000,
  headers: {'Content-Type': 'application/json'}
})

// Request Interceptor
$axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'Fake Token'
  return config
})

// Response Interceptor to handle and log errors
$axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // Handle Error
  console.log(error)
  return Promise.reject(error)
})

export default {

  fetchResource () {
    return $axios.get(`resource/xxx`)
      .then(response => response.data)
  },

  fetchSecureResource () {
    return $axios.get(`secure-resource/zzz`)
      .then(response => response.data)
  },

  fetchSimulation (id) {
    return $axios.get(`simdata/` + id)
      .then(response => response.data)
  },
  fetchSimulationList () {
    return $axios.get(`simdata/list`)
      .then(response => response.data)
  },
  postNotes(sim_id, notes){
    return $axios.post(`simdata/`+sim_id+"/notes", {'notes':notes})
      .then(response => response.data)
  }
}
