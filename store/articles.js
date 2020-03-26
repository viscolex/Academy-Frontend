export const state = () => ({
    articles: null,
    articlesTopTwo: null,
    articlesRemaining: null
})
  
export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    async fetchArticles({ commit, dispatch }) {
      await dispatch('storeDispatchFunc')
    },
  
    // axios...
    async storeDispatchFunc({ commit }) {
      const { data } = await this.$axios.get('http://localhost:1337/articles')
      commit('SET_DATA', data)
    },
}
  
export const mutations = {
    SET_DATA(state, theData) {
      state.articles = theData;
      state.articlesTopTwo = theData.slice(-2).reverse();
      state.articlesRemaining = theData.reverse().slice(-9, -1);
    }
}
  
  
  
  
    