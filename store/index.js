const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('articles/fetchArticles');
    await dispatch('news/fetchNews');
    await dispatch('projects/fetchProjects');
    await dispatch('categories/fetchCategories');
  }
}

export default {
  actions
}