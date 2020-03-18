<template>
  <div>
    <p v-if="$fetchState.pending">Fetching...</p>
    <p v-else-if="$fetchState.error">Error while fetching: {{ $fetchState.error.message }}</p>
    <div class="uk-container uk-container-expand">
      <div class="uk-padding-small uk-padding-remove-right uk-padding-remove-left pt-1">
        <div class="uk-grid uk-flex-center uk-grid-match uk-grid-column-collapse">
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
            :key="category.slug"
            :to="`/categories/${category.slug}`"
            tag="a"
            class="uk-card uk-margin-small-right uk-margin-small-left smaller-tabs-margins-mobile"
            id="link-hover"
          >
            <div class="uk-padding-small category-tabs">
              <div
                v-show="category.name"
                class="uk-text-uppercase category-tabs"
              >{{ category.name }}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <ViewAll></ViewAll>
    </div>
  </div>
</template>

<script>
import ViewAll from "~/components/ViewAll";

export default {
  data() {
    return {
      categories: []
    };
  },
  async fetch() {
    this.categories = await this.$http.$get(`http://localhost:1337/categories`);
    this.category = await this.$http.$get(
      `http://localhost:1337/categories?slug=${this.$route.params.slug}`
    );
  },
  head() {
    return {
      title: "All Articles" + " | " + "Txbit Academy"
    };
  },
  components: {
    ViewAll
  }
};
</script>
