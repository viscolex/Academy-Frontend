<template>
  <div>
    <h2
      class="project-container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom"
    >MORE FROM TXBIT ACADEMY</h2>
    <hr class="main-hr" />
    <div class="uk-grid uk-grid-match uk-grid-column-small">
      <router-link
        v-for="article in randomArticles"
        :key="article.id"
        :to="{ name: 'articles-id', params: { id: article.id } }"
        class="uk-width-1-2 uk-width-1-4@s"
      >
        <div class="uk-card uk-margin-bottom card-background more-articles-hover" id="link-hover">
          <div v-if="article.image_new" class="uk-card-media-top">
            <img
              :src="api_url + article.image_new.url"
              fluid-grow
              alt="article.image_alt"
              style="pointer-events: none;"
            />
          </div>
          <div class="uk-padding-small pt-2 pb-2">
            <div class="row px-1 uk-clearfix">
              <span
                id="category"
                v-if="article.category"
                class="uk-text-uppercase uk-float-left"
              >{{ article.category.name }}</span>
            </div>
            <p id="title" class="uk-margin-remove-top title-articles">{{ article.title }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
var moment = require("moment");

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

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
    randomArticles() {
      shuffle(this.articles);
      return this.articles.slice(0, 4);
    }
  }
};
</script>
