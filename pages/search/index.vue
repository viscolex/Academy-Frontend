<template>
  <div class="uk-container">
    <div class="uk-grid uk-grid-match uk-grid-column-small">
      <n-link
        v-for="article in Articles"
        :key="article.slug"
        :to="`/articles/${article.slug}`"
        class="uk-width-1 uk-width-1-2@s uk-width-1-4@m"
      >
        <div class="uk-card uk-margin-bottom card-background uk-box-shadow-small" id="link-hover">
          <img
            :src="api_url + article.image_new.url"
            :alt="article.image_alt"
            class="uk-card-media-top"
            style="pointer-events: none;"
          />
          <div class="uk-padding-small pt-2 pb-2">
            <div class="row px-1 uk-clearfix">
              <span id="category" class="uk-text-uppercase uk-float-left">
                {{
                article.category.name
                }}
              </span>
              <div class="uk-float-right">
                <span id="date">{{ $moment(article.published_at).format("Do MMM YYYY") }}</span>
              </div>
            </div>
            <div id="title" class="uk-margin-remove-top title-articles">{{ article.title }}</div>
          </div>
        </div>
      </n-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },
  computed: {
    ...mapState(["articles"]),
    Articles() {
      let articles = this.articles.articles.find(
        el => el.slug === "what-is-hodl"
      );
      return articles;
    }
  }
};
</script>
