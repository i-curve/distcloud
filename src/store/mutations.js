export default {
  setToken (state, data) {
    state.token = data.token,
    state.username = data.username
  },
  setPath (state, data) {
    state.path = data
  },
  setItem (state, data) {
    state.item = data.data
  },
}