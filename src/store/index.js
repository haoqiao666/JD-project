import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topHeight: ''
  },
  actions: {
    defautHeight (ctx, defaultHeight) {
      ctx.commit('defautHeight2', defaultHeight)
    }
  },
  mutations: {
    defautHeight2 (state, defaultHeight) {
      state.topHeight = defaultHeight
      console.log(defaultHeight)
    }
  }
})
