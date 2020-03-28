const state = {
  name: ""
}

const mutations = {
  SET_NAME(state, value) {
    state.name = value
  }
}

const actions = {
  getUserInfo({ commit }) {
    commit("SET_NAME", "EsunR")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
