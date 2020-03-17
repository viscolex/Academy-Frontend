<template>
  <div>
    <div class="uk-container uk-container-expand">
      <div
        class="uk-padding-small uk-padding-remove-right uk-padding-remove-left pt-1"
      >
        <div
          class="uk-grid uk-flex-center uk-grid-match uk-grid-column-collapse"
        >
          <nuxt-link to="/viewall">
            <div
              class="uk-card uk-margin-small-right uk-margin-small-left smaller-tabs-margins-mobile"
            >
              <div class="uk-padding-small category-tabs activeitem">
                <h4 class="uk-text-uppercase category-tabs">ALL</h4>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            v-for="category in categories"
            :key="category.id"
            :to="{ name: 'categories-id', params: { id: category.id } }"
            tag="a"
            class="uk-card uk-margin-small-right uk-margin-small-left smaller-tabs-margins-mobile"
            id="link-hover"
          >
            <div class="uk-padding-small category-tabs">
              <div
                v-show="category.name"
                class="uk-text-uppercase category-tabs"
              >
                {{ category.name }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <ViewAll :articles="articles"></ViewAll>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import categoriesQuery from "~/apollo/queries/category/categories";
import ViewAll from "~/components/ViewAll";

export default {
  data() {
    return {
      articles: [],
      categories: []
    };
  },
  head() {
    return {
      title: "All Articles" + " | " + "Txbit Academy"
    };
  },
  components: {
    ViewAll
  },
  apollo: {
    articles: {
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
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>
