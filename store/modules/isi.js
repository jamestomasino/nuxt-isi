// store/modules/isi.js
export default options => ({
  namespaced: true,
  state: () => ({
    showISI: false
  }),
  mutations: {
    toggleISI: (state) => {
      state.showISI = !state.showISI
    },
    setISI: (state, status) => {
      if (status) {
        state.showISI = true
      } else {
        state.showISI = false
      }
    }
  },
  getters: {
    showISI: (state) => {
      return state.showISI
    },
    isISIOpen: (state) => {
      return state.showISI
    }
  }
})
