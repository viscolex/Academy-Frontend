<template>
  <div>
    <div class="uk-margin-top pb-3 more-articles-background">
      <div class="uk-container">
        <h2
          class="project-container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom"
        >MORE FROM TXBIT ACADEMY</h2>
        <hr class="main-hr" />
        <div class="uk-grid uk-grid-match uk-grid-column-small">
          <router-link
            v-for="article in randomArticles"
            :key="article.slug"
            :to="`/articles/${article.slug}`"
            class="uk-width-1-2 uk-width-1-4@s"
          >
            <div
              class="uk-card uk-margin-bottom card-background more-articles-hover"
              id="link-hover"
            >
              <img
                :src="api_url + article.image_new.url"
                fluid-grow
                alt="article.image_alt"
                style="pointer-events: none;"
                v-show="article.image_new"
                class="uk-card-media-top"
              />
              <div class="uk-padding-small pt-2 pb-2">
                <div class="row px-1 uk-clearfix">
                  <span
                    id="category"
                    v-show="article.category"
                    class="uk-text-uppercase uk-float-left"
                  >{{ article.category.name }}</span>
                </div>
                <div id="title" class="uk-margin-remove-top title-articles">{{ article.title }}</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    };
  },
  computed: {
    ...mapState(["articles"]),
    randomArticles() {
      let articles = this.articles.articles;
      shuffle(articles);
      return articles.slice(0, 4);
    }
  }
};
</script>
