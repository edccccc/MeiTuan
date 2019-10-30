const state = () => ({
  position: {
    province:'',
    city:''
  }
})

const mutations = {
  setPosition(state, position) {
    state.position = position
  }
}

const actions = {
  setPosition({
    commit
  }, data) {
    commit('setPosition', data)
  }
}
const getters = {
    province:state=>state.position.province,
    city:state=>state.position.city
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
