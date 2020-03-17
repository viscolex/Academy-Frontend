<template>
  <div v-show="leftArticles || rightArticles != null || undefined">
    <div class="uk-grid uk-grid-match uk-grid-column-small">
      <nuxt-link
        v-for="article in leftArticles"
        :key="article.id"
        :to="{ name: 'articles-id', params: { id: article.id } }"
        class="uk-width-1-2@s"
      >
        <div
          class="uk-card uk-margin-bottom card-background uk-box-shadow-small"
          id="link-hover"
        >
          <img
            v-show="article.image_new"
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
                v-show="article.category"
                class="uk-text-uppercase uk-float-left"
                >{{ article.category.name }}</span
              >
            </div>
            <div
              id="title"
              class="uk-margin-remove-top title-bottom-border title-articles"
              v-show="article.title"
            >
              {{ article.title }}
            </div>
            <div class="uk-visible@l">
              <span id="content" v-show="article.content">{{
                article.content.substring(0, 250) + "..."
              }}</span>
            </div>
            <div class="uk-hidden@l">
              <span id="content" v-show="article.content">{{
                article.content.substring(0, 150) + "..."
              }}</span>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="uk-margin-remove-top uk-visible@m">
      <div class="uk-grid uk-grid-match uk-grid-column-small">
        <router-link
          v-for="article in rightArticles"
          :key="article.id"
          :to="{ name: 'articles-id', params: { id: article.id } }"
          class="uk-width-1 uk-width-1-2@s uk-width-1-4@m"
        >
          <div class="uk-card uk-margin-bottom card-background" id="link-hover">
            <div v-show="article.image_new">
              <img
                :src="api_url + article.image_new.url"
                :alt="article.image_alt"
                fluid-grow
                style="pointer-events: none;"
                class="uk-card-media-top"
              />
            </div>
            <div class="uk-padding-small pt-2 pb-2">
              <div class="row px-1 uk-clearfix">
                <span
                  id="category"
                  v-show="article.category"
                  class="uk-text-uppercase uk-float-left"
                  >{{ article.category.name }}</span
                >
              </div>
              <div
                id="title"
                class="uk-margin-remove-top title-articles"
                v-show="article.title"
              >
                {{ article.title }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
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
    leftArticles() {
      return this.articles.slice(-2).reverse();
    },
    rightArticles() {
      return this.articles.slice(-10, -2).reverse();
    }
  }
};
</script>
