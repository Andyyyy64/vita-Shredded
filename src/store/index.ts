import { createStore } from 'vuex'
export interface State{
  maleFlg:boolean
}

export default createStore<State>({
  state: {
    maleFlg:false
  },
  getters: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
