export const state = () => ({
    categories: null,
})
  
export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    async fetchCategories({ commit, dispatch }) {
      await dispatch('storeDispatchFunc')
    },
  
    // axios...
    async storeDispatchFunc({ commit }) {
      const { data } = await this.$axios.get('http://localhost:1337/categories')
      commit('SET_DATA', data)
    },
}
  
export const mutations = {
    SET_DATA(state, theData) {
      state.categories = theData;
    }
}
  
  
  
  
    