<template>
  <div>
    <div v-show="category != null || undefined">
      <div class="uk-container uk-container-expand">
        <div class="uk-padding-small uk-padding-remove-right uk-padding-remove-left pt-1">
          <div class="uk-grid uk-flex-center uk-grid-match uk-grid-column-collapse">
            <nuxt-link to="/viewall">
              <div
                class="uk-card uk-margin-small-right uk-margin-small-left smaller-tabs-margins-mobile"
                id="link-hover"
              >
                <div class="uk-padding-small category-tabs">
                  <h4 class="uk-text-uppercase category-tabs">ALL</h4>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link
              v-for="category in categories"
              v-bind:key="category.id"
              :to="{ name: 'categories-id', params: { id: category.id } }"
              tag="a"
              class="uk-card uk-margin-small-right uk-margin-small-left smaller-tabs-margins-mobile"
              id="link-hover"
            >
              <div
                class="uk-padding-small category-tabs"
                v-bind:class="{ activeitem: category.id === activeItem }"
              >
                <div
                  v-show="category.name"
                  class="uk-text-uppercase category-tabs"
                >{{ category.name }}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <ViewCategories :articles="category.articles || []"></ViewCategories>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles-categories";
import categoriesQuery from "~/apollo/queries/category/categories";
import ViewCategories from "~/components/ViewCategories";

export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  data() {
    return {
      category: [],
      categories: [],
      activeItem: this.$route.params.id
    };
  },
  head() {
    return {
      title: this.category.name + " " + "Articles" + " | " + "Txbit Academy"
    };
  },
  components: {
    ViewCategories
  },
  apollo: {
    category: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    },
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
};
</script>
