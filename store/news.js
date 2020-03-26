export const state = () => ({
    news: null
})

export const actions = {
    async fetchNews({commit, dispatch}) {
        await dispatch('storeDispatchFunc')
    },

    async storeDispatchFunc({commit}) {
        const { data } = await this.$axios.get('http://localhost:1337/txbitnewsposts')
        commit('SET_DATA', data)
    }
}

export const mutations = {
    SET_DATA(state, theData) {
        state.news = theData.reverse().slice(0, -10)
    }
}