export const state = () => ({
    projects: null,
    projectsLatest: null
})

export const actions = {
    async fetchProjects({commit, dispatch}) {
        await dispatch('storeDispatchFunc')
    },

    async storeDispatchFunc({commit}) {
        const { data } = await this.$axios.get('http://localhost:1337/projectintroductions')
        commit('SET_DATA', data)
    }
}

export const mutations = {
    SET_DATA(state, theData) {
        state.projects = theData.reverse()
        state.projectsLatest = theData.slice(0,4)
    }
}