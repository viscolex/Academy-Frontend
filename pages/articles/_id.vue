<template>
  <div v-if="article != null || undefined">
    <div class="uk-container">
      <div class="uk-card mt-3 card-background uk-box-shadow-small">
        <div v-if="article.image_new">
          <img
            :src="api_url + article.image_new.url"
            :alt="article.image_alt"
            width
            height
            style="pointer-events: none;"
            uk-img
          />
        </div>
        <div class="uk-text-center uk-padding uk-padding-remove-bottom">
          <h1 class="mb-0" style="font-weight: 700;">{{ article.title }}</h1>
        </div>
        <div class="uk-padding">
          <div>
            <div
              v-if="article.content"
              id="editor"
              v-html="$md.render(article.content)"
            ></div>
            <div class="uk-clearfix">
              <div class="uk-float-right">
                <span
                  v-if="article.published_at"
                  class="uk-article-meta mb-0"
                  style="color:#ffb300"
                >
                  <fa icon="calendar-alt" />
                  {{ moment(article.published_at).format("Do MMM YYYY") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="uk-grid uk-padding-small uk-padding-remove-right uk-padding-remove-left Up"
      >
        <a href="javascript:history.go(-1)">
          <div
            class="uk-card card-background uk-box-shadow-small article-actions"
            id="link-hover"
          >
            <div class="uk-padding-small article-actions-padding">
              <fa icon="arrow-left" />
              <span
                class="navbar-item-text"
                style="font-size: 1rem; font-weight:500;"
                >GO BACK</span
              >
            </div>
          </div>
        </a>
        <div class="uk-grid uk-float-right" style="margin-left:auto; ">
          <div
            class="uk-card card-background uk-box-shadow-small article-actions pl-0 uk-visible@m"
          >
            <div class="uk-padding-small article-actions-padding">
              <span
                class="uk-text-bold"
                style="font-size: 1rem; font-weight:500;"
                >SHARE</span
              >
              <fa icon="chevron-right" />
            </div>
          </div>
          <a
            v-bind:href="
              `https://twitter.com/intent/tweet?text=I've%20just%20read%20this%20article%20from%20Txbit%20Academy!%20` +
                'https//txbit.academy/articles/' +
                article.id
            "
            target="_blank"
            class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
          >
            <div
              class="uk-card card-background uk-box-shadow-small article-actions"
              id="link-hover"
            >
              <div
                class="uk-padding-small article-actions-padding category-hover"
              >
                <span>
                  <fa :icon="['fab', 'twitter']" />
                </span>
              </div>
            </div>
          </a>
          <a
            v-bind:href="
              `https://www.facebook.com/sharer/sharer.php?u=www.txbit.academy` +
                '/articles/' +
                article.id
            "
            target="_blank"
            class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
          >
            <div
              class="uk-card card-background uk-box-shadow-small article-actions"
              id="link-hover"
            >
              <div
                class="uk-padding-small article-actions-padding category-hover"
              >
                <span>
                  <fa :icon="['fab', 'facebook']" />
                </span>
              </div>
            </div>
          </a>
          <a
            v-bind:href="
              `https://www.linkedin.com/sharing/share-offsite/?url=www.txbit.academy` +
                '/articles/' +
                article.id
            "
            target="_blank"
            class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
          >
            <div
              class="uk-card card-background uk-box-shadow-small article-actions"
              id="link-hover"
            >
              <div
                class="uk-padding-small article-actions-padding category-hover"
              >
                <span>
                  <fa :icon="['fab', 'linkedin']" />
                </span>
              </div>
            </div>
          </a>
          <a
            v-bind:href="
              `https://telegram.me/share/url?url=www.txbit.io` +
                '/articles/' +
                article.id +
                `&text=` +
                article.title
            "
            target="_blank"
            class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
          >
            <div
              class="uk-card card-background uk-box-shadow-small article-actions"
              id="link-hover"
            >
              <div
                class="uk-padding-small article-actions-padding category-hover"
              >
                <span>
                  <fa :icon="['fab', 'telegram']" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div style="background-color:#272A37;" class="uk-margin-top pb-3">
      <div class="uk-container">
        <MoreArticles :articles="articles"></MoreArticles>
      </div>
    </div>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article";
import articlesQuery from "~/apollo/queries/article/articles";
import MoreArticles from "~/components/MoreArticles";
var moment = require("moment");

export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      article: {},
      articles: [],
      moment: moment
    };
  },
  head() {
    return {
      title: this.article.title + " | " + "Txbit Academy",
      meta: [
        {
          hid: `description`,
          name: "description",
          content: this.article.description
        },
        {
          hid: `keywords`,
          name: "keywords",
          keywords: this.article.keywords
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.article.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "Article"
        },
        {
          hid: "og:url",
          property: "og:url",
          content:
            `https://txbit.academy` + "/articles/" + this.article.id + "/"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.article.image_src
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "1200"
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "600"
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.article.description
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.article.title
        },
        {
          hid: "twitter:site",
          property: "twitter:site",
          content:
            `https://txbit.academy` + "/articles/" + this.article.id + "/"
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.article.image_src
        },
        {
          hid: "twitter:creator",
          property: "twitter:creator",
          content: "@txbit_io"
        }
      ]
    };
  },
  components: {
    MoreArticles
  },

  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    },
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    }
  }
};
</script>
