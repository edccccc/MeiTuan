import Vue from 'vue'
import Vuex from 'vuex'
import geo from './geo/index'

Vue.use(Vuex)

const store =()=> new Vuex.Store({
    modules: {
      geo
    },
    actions:{
          async nuxtServerInit({commit},{req,app}){
              const {status,data} = await app.$axios.get('/geo/getPosition')
              commit('geo/setPosition',status===200?{...data}:{})
          }
    }
  })
  
export default store