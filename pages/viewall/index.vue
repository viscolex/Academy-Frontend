<template>
  <div>
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
            v-for="category in this.$store.state.categories.categories"
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
import { mapState } from "vuex";

export default {
  data() {
    return {};
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
