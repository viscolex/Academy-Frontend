<template>
  <div>
    <client-only>
      <div v-show="projectintroduction">
        <div class="uk-container">
          <div class="uk-grid uk-grid-column-small">
            <div class="uk-width-1-4@m">
              <div class="uk-card mt-3 card-background uk-box-shadow-small fast">
                <div class="uk-padding-small">
                  <div class="uk-grid">
                    <div class="uk-text-center uk-width-1-2 uk-width-1-1@m">
                      <div v-if="projectintroduction.image_new">
                        <img
                          :src="api_url + projectintroduction.image_new.url"
                          fluid-grow
                          alt="Fluid-grow image"
                          style="width: 40%; pointer-events: none; max-height:200px; max-width:200px;"
                        />
                      </div>
                      <div
                        class="uk-text-lead"
                        style="color: white;"
                      >{{ projectintroduction.title }}</div>
                      <div class="uk-text-meta">({{ projectintroduction.ticker }})</div>
                    </div>
                    <div
                      class="uk-text-center pt-3 uk-width-1-2 uk-width-1-1@m"
                      style="font-size:0.95rem"
                    >
                      <div v-if="projectintroduction.website">
                        <fa :icon="['fas', 'globe']" />
                        <a
                          class="uk-button-text mx-0"
                          v-bind:href="projectintroduction.website"
                          id="link-hover"
                          target="_"
                        >Website</a>
                      </div>
                      <div
                        v-if="projectintroduction.explorer"
                        v-bind:href="projectintroduction.explorer"
                      >
                        <fa :icon="['fas', 'database']" />
                        <a class="uk-button-text mx-0" id="link-hover" target="_">Explorer</a>
                      </div>
                      <div v-if="projectintroduction.github">
                        <fa :icon="['fab', 'github']" />
                        <a
                          class="uk-button-text mx-0"
                          v-bind:href="projectintroduction.github"
                          id="link-hover"
                          target="_"
                        >Source Code</a>
                      </div>
                      <div v-if="projectintroduction.whitepaper">
                        <fa :icon="['fas', 'book-open']" />
                        <a
                          class="uk-button-text mx-0"
                          v-bind:href="projectintroduction.whitepaper"
                          id="link-hover"
                          target="_"
                        >Whitepaper</a>
                      </div>
                      <div v-if="projectintroduction.roadmap">
                        <fa :icon="['fas', 'route']" />
                        <a
                          class="uk-button-text mx-0"
                          v-bind:href="projectintroduction.roadmap"
                          id="link-hover"
                          target="_"
                        >Roadmap</a>
                      </div>
                      <div v-if="projectintroduction.team_members">
                        <fa :icon="['fas', 'user-tie']" />
                        <a
                          class="uk-button-text mx-0"
                          v-bind:href="projectintroduction.team_members"
                          id="link-hover"
                          target="_"
                        >Team Members</a>
                      </div>
                      <div v-if="projectintroduction.coinmarketcap">
                        <img
                          src="~/assets/images/cmc.png"
                          style="height:19px; color:white; pointer-events: none;"
                        />
                        <a
                          class="uk-button-text mx-0"
                          v-bind:href="projectintroduction.coinmarketcap"
                          id="link-hover"
                          target="_"
                        >Coinmarketcap</a>
                      </div>
                      <div v-if="projectintroduction.coingecko">
                        <img
                          src="~/assets/images/coingecko.png"
                          style="height:19px; pointer-events: none;"
                        />
                        <a
                          class="uk-button-text mx-0"
                          v-bind:href="projectintroduction.coingecko"
                          id="link-hover"
                          target="_"
                        >Coingecko</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2
                class="project-container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom pt-0 mt-2"
              >DETAILS</h2>
              <hr class="main-hr" />
              <div class="uk-card card-background uk-box-shadow-small">
                <div class="uk-padding-small" style="font-size:0.95rem">
                  <div v-if="projectintroduction.genesis">
                    <span class="uk-text-bold mr-1">Genesis Date:</span>
                    <span class="muted-white-text">
                      {{
                      moment(projectintroduction.genesis).format("Do MMM YYYY")
                      }}
                    </span>
                  </div>
                  <div v-if="projectintroduction.consensus_type">
                    <span class="uk-text-bold mr-1">Consensus Type:</span>
                    <span class="muted-white-text">
                      {{
                      projectintroduction.consensus_type
                      }}
                    </span>
                  </div>
                  <div v-if="projectintroduction.algorithm">
                    <span class="uk-text-bold mr-1">Algorithm:</span>
                    <span class="muted-white-text">
                      {{
                      projectintroduction.algorithm
                      }}
                    </span>
                  </div>
                  <div v-if="projectintroduction.block_time">
                    <span class="uk-text-bold mr-1">Block Time:</span>
                    <span class="muted-white-text">
                      {{
                      projectintroduction.block_time
                      }}
                    </span>
                  </div>
                  <div v-if="projectintroduction.max_supply">
                    <span class="uk-text-bold mr-1">Max Supply:</span>
                    <span class="muted-white-text">
                      {{ projectintroduction.max_supply }}
                      {{ projectintroduction.ticker }}
                    </span>
                  </div>
                </div>
              </div>
              <h2
                class="project-container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom pt-0 mt-2"
              >COMMUNITY</h2>
              <hr class="main-hr" />
              <div class="uk-card card-background uk-box-shadow-small">
                <div class="py-2 px-1">
                  <div class="uk-clearfix">
                    <div class="uk-text-center">
                      <a
                        v-if="projectintroduction.website"
                        class="uk-button uk-button-default uk-button-text"
                        id="link-hover"
                        v-bind:href="projectintroduction.twitter"
                        target="_"
                      >
                        <fa :icon="['fab', 'twitter']" style="font-size:1.2rem;" />
                      </a>
                      <a
                        v-if="projectintroduction.telegram"
                        class="uk-button uk-button-default px-1 uk-button-text"
                        id="link-hover"
                        v-bind:href="projectintroduction.telegram"
                        target="_"
                      >
                        <fa :icon="['fab', 'telegram-plane']" style="font-size:1.2rem;" />
                      </a>
                      <a
                        v-if="projectintroduction.discord"
                        class="uk-button uk-button-default px-1 uk-button-text"
                        id="link-hover"
                        v-bind:href="projectintroduction.discord"
                        target="_"
                      >
                        <fa :icon="['fab', 'discord']" style="font-size:1.2rem;" />
                      </a>
                      <a
                        v-if="projectintroduction.reddit"
                        class="uk-button uk-button-default px-1 uk-button-text"
                        id="link-hover"
                        v-bind:href="projectintroduction.reddit"
                        target="_"
                      >
                        <fa :icon="['fab', 'reddit-alien']" style="font-size:1.2rem;" />
                      </a>
                      <a
                        v-if="projectintroduction.facebook"
                        class="uk-button uk-button-default px-1 uk-button-text"
                        id="link-hover"
                        v-bind:href="projectintroduction.facebook"
                        target="_"
                      >
                        <fa :icon="['fab', 'facebook-f']" style="font-size:1.2rem;" />
                      </a>
                      <a
                        v-if="projectintroduction.medium"
                        class="uk-button uk-button-default px-1 uk-button-text"
                        id="link-hover"
                        v-bind:href="projectintroduction.medium"
                        target="_"
                      >
                        <fa :icon="['fab', 'medium-m']" style="font-size:1.2rem;" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h2
                class="project-container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom pt-0 mt-2"
              >
                TRADE ON TXBIT
                <img
                  src="~assets/images/txbit-logo.svg"
                  style="height:20px; margin-bottom: 3px; pointer-events: none;"
                />
              </h2>
              <hr class="main-hr" />
              <div uk-margin class="m-0 uk-grid fast">
                <a
                  class="uk-button mb-2 uk-button-primary uk-box-shadow-small p-0 px-0 uk-width-1-3 uk-width-1-1@m uk-width-1-3@l"
                  id="link-hover"
                  v-bind:href="
                'https://txbit.io/Trade/' +
                  projectintroduction.ticker +
                  '/BTC' +
                  '/?r=3f1'
              "
                  target="_"
                >
                  <span class="p-1">{{ projectintroduction.ticker }} / BTC</span>
                </a>
                <a
                  class="uk-button mb-2 uk-button-primary uk-box-shadow-small p-0 px-0 uk-width-1-3 uk-width-1-1@m uk-width-1-3@l"
                  id="link-hover"
                  v-bind:href="
                'https://txbit.io/Trade/' +
                  projectintroduction.ticker +
                  '/ETH' +
                  '/?r=3f1'
              "
                  target="_"
                >
                  <span class="p-1">{{ projectintroduction.ticker }} / ETH</span>
                </a>
                <a
                  class="uk-button mb-2 uk-button-primary uk-box-shadow-small p-0 px-0 uk-width-1-3 uk-width-1-1@m uk-width-1-3@l"
                  id="link-hover"
                  v-bind:href="
                'https://txbit.io/Trade/' +
                  projectintroduction.ticker +
                  '/XLR' +
                  '/?r=3f1'
              "
                  target="_"
                >
                  <span class="p-1">{{ projectintroduction.ticker }} / XLR</span>
                </a>
              </div>
            </div>
            <div class="uk-width-3-4@m">
              <div class="uk-card mt-3 card-background uk-box-shadow-small fast">
                <div class="uk-padding uk-padding-remove-bottom">
                  <h1
                    class="uk-text-center mb-0"
                    style="font-weight: 700;"
                  >{{ projectintroduction.title }} Introduction</h1>
                </div>
                <div class="uk-padding pt-4">
                  <div
                    v-if="projectintroduction.content"
                    id="editor"
                    v-html="$md.render(projectintroduction.content)"
                  ></div>
                  <div>
                    <h2 class="mb-4" style="font-weight: 700;">Live Market Data</h2>
                    <script
                      type="text/javascript"
                      src="https://files.coinmarketcap.com/static/widget/currency.js"
                    ></script>
                    <div
                      class="coinmarketcap-currency-widget"
                      v-bind:data-currencyid="projectintroduction.cmc_widget"
                      data-base="USD"
                      data-secondary="BTC"
                      data-ticker="true"
                      data-rank="true"
                      data-marketcap="true"
                      data-volume="true"
                      data-statsticker="true"
                      data-stats="USD"
                    ></div>
                  </div>
                  <div class="uk-clearfix">
                    <div class="uk-float-right">
                      <span
                        v-if="projectintroduction.published_at"
                        class="uk-article-meta mb-0"
                        style="color:#ffb300"
                      >
                        <fa :icon="['fas', 'calendar-alt']" />
                        {{
                        moment(projectintroduction.published_at).format(
                        "Do MMM YYYY"
                        )
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="uk-text-meta uk-text-center pt-4" style="font-size:0.7rem;">
                    <span>
                      This publication does not offer investment advice and nothing
                      in here be construed as investment advice. Our publications
                      provide information and education for investors who can make
                      their investment decisions.
                    </span>
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
                      <fa :icon="['fas', 'arrow-left']" />
                      <span
                        class="navbar-item-text"
                        style="font-size: 1rem; font-weight:500;"
                      >GO BACK</span>
                    </div>
                  </div>
                </a>
                <div class="uk-grid uk-float-right" style="margin-left:auto; ">
                  <div
                    class="uk-card card-background uk-box-shadow-small article-actions pl-0 uk-visible@m"
                  >
                    <div class="uk-padding-small article-actions-padding">
                      <span class="uk-text-bold" style="font-size: 1rem; font-weight:500;">SHARE</span>

                      <fa :icon="['fas', 'chevron-right']" />
                    </div>
                  </div>
                  <a
                    v-bind:href="
                  `https://twitter.com/intent/tweet?text=I've%20just%20read%20this%20article%20from%20Txbit%20Academy!%20` +
                    'https//txbit.academy/projects/' +
                    projectintroduction.id
                "
                    target="_blank"
                    class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
                  >
                    <div
                      class="uk-card card-background uk-box-shadow-small article-actions"
                      id="link-hover"
                    >
                      <div class="uk-padding-small article-actions-padding category-hover">
                        <span>
                          <fa :icon="['fab', 'twitter']" />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    v-bind:href="
                  `https://www.facebook.com/sharer/sharer.php?u=www.txbit.academy` +
                    '/projects/' +
                    projectintroduction.id
                "
                    target="_blank"
                    class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
                  >
                    <div
                      class="uk-card card-background uk-box-shadow-small article-actions"
                      id="link-hover"
                    >
                      <div class="uk-padding-small article-actions-padding category-hover">
                        <span>
                          <fa :icon="['fab', 'facebook']" />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    v-bind:href="
                  `https://www.linkedin.com/sharing/share-offsite/?url=www.txbit.academy` +
                    '/projects/' +
                    projectintroduction.id
                "
                    target="_blank"
                    class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
                  >
                    <div
                      class="uk-card card-background uk-box-shadow-small article-actions"
                      id="link-hover"
                    >
                      <div class="uk-padding-small article-actions-padding category-hover">
                        <span>
                          <fa :icon="['fab', 'linkedin']" />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    v-bind:href="
                  `https://telegram.me/share/url?url=www.txbit.io` +
                    '/projects/' +
                    projectintroduction.id +
                    `&text=` +
                    projectintroduction.title
                "
                    target="_blank"
                    class="uk-padding-small uk-padding-remove-vertical uk-padding-remove-right pl-2"
                  >
                    <div
                      class="uk-card card-background uk-box-shadow-small article-actions"
                      id="link-hover"
                    >
                      <div class="uk-padding-small article-actions-padding category-hover">
                        <span>
                          <fa :icon="['fab', 'telegram']" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="background-color:#272A37;" class="uk-margin-top pb-3">
          <div class="uk-container">
            <MoreArticles :articles="articles"></MoreArticles>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import projectintroductionQuery from "~/apollo/queries/project/projectintroduction";
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
      projectintroduction: {},
      articles: [],
      moment: moment,
      projectdata: null,
      api_url: process.env.strapiBaseUri
    };
  },

  head() {
    return {
      title:
        this.projectintroduction.title +
        " " +
        "Introduction" +
        " | " +
        "Txbit Academy",
      meta: [
        {
          hid: `description`,
          name: "description",
          content: this.projectintroduction.description
        },
        {
          hid: `keywords`,
          name: "keywords",
          keywords: this.projectintroduction.keywords
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.projectintroduction.title + " Introduction"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.projectintroduction.description
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
            `https://txbit.academy` +
            "/project/" +
            this.projectintroduction.id +
            "/"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.projectintroduction.image_src
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "500"
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "500"
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.projectintroduction.description
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.projectintroduction.title
        },
        {
          hid: "twitter:site",
          property: "twitter:site",
          content:
            `https://txbit.academy` +
            "/project/" +
            this.projectintroduction.id +
            "/"
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.projectintroduction.image_src
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
    projectintroduction: {
      prefetch: true,
      query: projectintroductionQuery,
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
