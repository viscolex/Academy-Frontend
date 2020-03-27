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
              id="link-hover"
            >
              <div class="uk-padding-small category-tabs">
                <h4 class="uk-text-uppercase category-tabs">ALL</h4>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            v-for="category in this.$store.state.categories.categories"
            v-bind:key="category.slug"
            :to="`/categories/${category.slug}`"
            tag="a"
            class="uk-card uk-margin-small-right uk-margin-small-left smaller-tabs-margins-mobile"
            id="link-hover"
          >
            <div
              class="uk-padding-small category-tabs"
              v-bind:class="{ activeitem: category.slug === activeItem }"
            >
              <div class="uk-text-uppercase category-tabs">
                {{ category.name }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <ViewCategories></ViewCategories>
    </div>
  </div>
</template>

<script>
import ViewCategories from "~/components/ViewCategories";
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeItem: this.$route.params.slug,
      currentCategorySlug: ""
    };
  },
  created() {
    this.currentCategorySlug = this.$route.params.slug;
  },

  computed: {
    ...mapState(["categories"]),

    category() {
      let result = this.categories.categories.find(
        el => el.slug === this.currentCategorySlug
      ).articles;
      if (!this.$route.params.slug) {
        return this.categories.categories.find(
          el => el.slug === this.currentCategorySlug
        );
      } else {
        return result;
      }
    }
  },
  head() {
    return {
      title: "All Articles" + " | " + "Txbit Academy"
    };
  },
  components: {
    ViewCategories
  }
};
</script>
