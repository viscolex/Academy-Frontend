<template>
  <div>
    <div class="uk-grid uk-grid-match uk-grid-column-small">
      <router-link
        v-for="article in allArticles"
        :key="article.id"
        :to="{ name: 'articles-id', params: { id: article.id } }"
        class="uk-width-1 uk-width-1-2@s uk-width-1-4@m"
      >
        <div
          v-if="article.content"
          class="uk-card uk-margin-bottom card-background uk-box-shadow-small"
          id="link-hover"
        >
          <img
            v-if="article.image_new"
            :src="api_url + article.image_new.url"
            :alt="article.image_alt"
            width
            height
            class="uk-card-media-top"
            style="pointer-events: none;"
            uk-img
          />
          <div class="uk-padding-small pt-2 pb-2">
            <div class="row px-1 uk-clearfix">
              <span
                id="category"
                v-if="article.category"
                class="uk-text-uppercase uk-float-left"
                >{{ article.category.name }}</span
              >
              <div class="uk-float-right">
                <span id="date" v-if="article.published_at">
                  {{ moment(article.published_at).format("Do MMM YYYY") }}
                </span>
              </div>
            </div>
            <p
              id="title"
              class="uk-margin-remove-top title-articles"
              v-if="article.title"
            >
              {{ article.title }}
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
var moment = require("moment");

export default {
  data() {
    return {
      moment: moment,
      api_url: process.env.strapiBaseUri
    };
  },
  props: {
    articles: Array
  },
  computed: {
    allArticles() {
      return this.articles.slice(0).reverse();
    }
  }
};
</script>
