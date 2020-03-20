<template>
  <div>
    <div v-if="$fetchState.pending">Fetching...</div>
    <p v-else-if="$fetchState.error">
      Error while fetching: {{ $fetchState.error.message }}
    </p>
    <div class="uk-container">
      <div class="uk-grid uk-grid-column-small">
        <div class="uk-width-1-4@m">
          <div class="uk-card mt-3 card-background uk-box-shadow-small fast">
            <div class="uk-padding-small">
              <div class="uk-grid">
                <div class="uk-text-center uk-width-1-2 uk-width-1-1@m">
                  <img
                    :src="api_url + projectintroduction[0].image_new.url"
                    fluid-grow
                    alt="Fluid-grow image"
                    style="width: 40%; pointer-events: none; max-height:200px; max-width:200px;"
                  />

                  <div class="uk-text-lead" style="color: white;">
                    {{ projectintroduction[0].title }}
                  </div>
                  <div class="uk-text-meta">
                    ({{ projectintroduction[0].ticker }})
                  </div>
                </div>
                <div
                  class="uk-text-center pt-3 uk-width-1-2 uk-width-1-1@m"
                  style="font-size:0.95rem"
                >
                  <div>
                    <fa :icon="['fas', 'globe']" />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].website"
                      id="link-hover"
                      target="_"
                      >Website</a
                    >
                  </div>
                  <div>
                    <fa :icon="['fas', 'database']" />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].explorer"
                      id="link-hover"
                      target="_"
                      >Explorer</a
                    >
                  </div>
                  <div>
                    <fa :icon="['fab', 'github']" />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].github"
                      id="link-hover"
                      target="_"
                      >Source Code</a
                    >
                  </div>
                  <div>
                    <fa :icon="['fas', 'book-open']" />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].whitepaper"
                      id="link-hover"
                      target="_"
                      >Whitepaper</a
                    >
                  </div>
                  <div>
                    <fa :icon="['fas', 'route']" />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].roadmap"
                      id="link-hover"
                      target="_"
                      >Roadmap</a
                    >
                  </div>
                  <div>
                    <fa :icon="['fas', 'user-tie']" />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].team_members"
                      id="link-hover"
                      target="_"
                      >Team Members</a
                    >
                  </div>
                  <div>
                    <img
                      src="~/assets/images/cmc.png"
                      style="height:19px; color:white; pointer-events: none;"
                    />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].coinmarketcap"
                      id="link-hover"
                      target="_"
                      >Coinmarketcap</a
                    >
                  </div>
                  <div>
                    <img
                      src="~/assets/images/coingecko.png"
                      style="height:19px; pointer-events: none;"
                    />
                    <a
                      class="uk-button-text mx-0"
                      v-bind:href="projectintroduction[0].coingecko"
                      id="link-hover"
                      target="_"
                      >Coingecko</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2
            class="project-container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom pt-0 mt-2"
          >
            DETAILS
          </h2>
          <hr class="main-hr" />
          <div class="uk-card card-background uk-box-shadow-small">
            <div class="uk-padding-small" style="font-size:0.95rem">
              <div>
                <span class="uk-text-bold mr-1">Genesis Date:</span>
                <span class="muted-white-text">
                  {{
                    $moment(projectintroduction[0].genesis).format(
                      "Do MMM YYYY"
                    )
                  }}
                </span>
              </div>
              <div>
                <span class="uk-text-bold mr-1">Consensus Type:</span>
                <span class="muted-white-text">
                  {{ projectintroduction[0].consensus_type }}
                </span>
              </div>
              <div>
                <span class="uk-text-bold mr-1">Algorithm:</span>
                <span class="muted-white-text">
                  {{ projectintroduction[0].algorithm }}
                </span>
              </div>
              <div>
                <span class="uk-text-bold mr-1">Block Time:</span>
                <span class="muted-white-text">
                  {{ projectintroduction[0].block_time }}
                </span>
              </div>
              <div>
                <span class="uk-text-bold mr-1">Max Supply:</span>
                <span class="muted-white-text">
                  {{ projectintroduction[0].max_supply }}
                  {{ projectintroduction[0].ticker }}
                </span>
              </div>
            </div>
          </div>
          <h2
            class="project-container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom pt-0 mt-2"
          >
            COMMUNITY
          </h2>
          <hr class="main-hr" />
          <div class="uk-card card-background uk-box-shadow-small">
            <div class="py-2 px-1">
              <div class="uk-clearfix">
                <div class="uk-text-center">
                  <a
                    class="uk-button uk-button-default uk-button-text"
                    id="link-hover"
                    v-bind:href="projectintroduction[0].twitter"
                    target="_"
                  >
                    <fa :icon="['fab', 'twitter']" style="font-size:1.2rem;" />
                  </a>
                  <a
                    class="uk-button uk-button-default px-1 uk-button-text"
                    id="link-hover"
                    v-bind:href="projectintroduction[0].telegram"
                    target="_"
                  >
                    <fa
                      :icon="['fab', 'telegram-plane']"
                      style="font-size:1.2rem;"
                    />
                  </a>
                  <a
                    class="uk-button uk-button-default px-1 uk-button-text"
                    id="link-hover"
                    v-bind:href="projectintroduction[0].discord"
                    target="_"
                  >
                    <fa :icon="['fab', 'discord']" style="font-size:1.2rem;" />
                  </a>
                  <a
                    class="uk-button uk-button-default px-1 uk-button-text"
                    id="link-hover"
                    v-bind:href="projectintroduction[0].reddit"
                    target="_"
                  >
                    <fa
                      :icon="['fab', 'reddit-alien']"
                      style="font-size:1.2rem;"
                    />
                  </a>
                  <a
                    class="uk-button uk-button-default px-1 uk-button-text"
                    id="link-hover"
                    v-bind:href="projectintroduction[0].facebook"
                    target="_"
                  >
                    <fa
                      :icon="['fab', 'facebook-f']"
                      style="font-size:1.2rem;"
                    />
                  </a>
                  <a
                    class="uk-button uk-button-default px-1 uk-button-text"
                    id="link-hover"
                    v-bind:href="projectintroduction[0].medium"
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
                  projectintroduction[0].ticker +
                  '/BTC' +
                  '/?r=3f1'
              "
              target="_"
            >
              <span class="p-1">{{ projectintroduction[0].ticker }} / BTC</span>
            </a>
            <a
              class="uk-button mb-2 uk-button-primary uk-box-shadow-small p-0 px-0 uk-width-1-3 uk-width-1-1@m uk-width-1-3@l"
              id="link-hover"
              v-bind:href="
                'https://txbit.io/Trade/' +
                  projectintroduction[0].ticker +
                  '/ETH' +
                  '/?r=3f1'
              "
              target="_"
            >
              <span class="p-1">{{ projectintroduction[0].ticker }} / ETH</span>
            </a>
            <a
              class="uk-button mb-2 uk-button-primary uk-box-shadow-small p-0 px-0 uk-width-1-3 uk-width-1-1@m uk-width-1-3@l"
              id="link-hover"
              v-bind:href="
                'https://txbit.io/Trade/' +
                  projectintroduction[0].ticker +
                  '/XLR' +
                  '/?r=3f1'
              "
              target="_"
            >
              <span class="p-1">{{ projectintroduction[0].ticker }} / XLR</span>
            </a>
          </div>
        </div>
        <div class="uk-width-3-4@m">
          <div class="uk-card mt-3 card-background uk-box-shadow-small fast">
            <div class="uk-padding uk-padding-remove-bottom">
              <h1 class="uk-text-center mb-0" style="font-weight: 700;">
                {{ projectintroduction[0].title }} Introduction
              </h1>
            </div>
            <div class="uk-padding pt-4">
              <div
                v-if="projectintroduction[0].content"
                id="editor"
                v-html="$md.render(projectintroduction[0].content)"
              ></div>
              <div>
                <h2 class="mb-4" style="font-weight: 700;">Live Market Data</h2>
                <script
                  type="text/javascript"
                  src="https://files.coinmarketcap.com/static/widget/currency.js"
                ></script>
                <div
                  class="coinmarketcap-currency-widget"
                  v-bind:data-currencyid="projectintroduction[0].cmc_widget"
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
                    v-if="projectintroduction[0].published_at"
                    class="uk-article-meta mb-0"
                    style="color:#ffb300"
                  >
                    <fa :icon="['fas', 'calendar-alt']" />
                    {{
                      $moment(projectintroduction.published_at).format(
                        "Do MMM YYYY"
                      )
                    }}
                  </span>
                </div>
              </div>
              <div
                class="uk-text-meta uk-text-center pt-4"
                style="font-size:0.7rem;"
              >
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

                  <fa :icon="['fas', 'chevron-right']" />
                </div>
              </div>
              <a
                v-bind:href="
                  `https://twitter.com/intent/tweet?text=I've%20just%20read%20this%20article%20from%20Txbit%20Academy!%20` +
                    'https//txbit.academy/projects/' +
                    projectintroduction[0].slug
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
                    '/projects/' +
                    projectintroduction[0].slug
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
                    '/projects/' +
                    projectintroduction[0].slug
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
                    '/projects/' +
                    projectintroduction[0].slug +
                    `&text=` +
                    projectintroduction[0].slug
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
      </div>
    </div>
    <div style="background-color:#272A37;" class="uk-margin-top pb-3">
      <div class="uk-container">
        <MoreArticles></MoreArticles>
      </div>
    </div>
  </div>
</template>

<script>
import MoreArticles from "~/components/MoreArticles";

export default {
  data() {
    return {
      projectintroduction: [],
      projectdata: null,
      api_url: process.env.strapiBaseUri
    };
  },
  async fetch() {
    this.projectintroduction = await this.$http.$get(
      `http://localhost:1337/projectintroductions?slug=${this.$route.params.slug}`
    );
  },
  head() {
    return {
      title:
        this.projectintroduction[0].title +
        " " +
        "Introduction" +
        " | " +
        "Txbit Academy",
      meta: [
        {
          hid: `description`,
          name: "description",
          content: this.projectintroduction[0].description
        },
        {
          hid: `keywords`,
          name: "keywords",
          keywords: this.projectintroduction[0].keywords
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.projectintroduction[0].title + " Introduction"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.projectintroduction[0].description
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
            this.projectintroduction[0].slug +
            "/"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.api_url + this.projectintroduction[0].image_new.url
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
          content: this.projectintroduction[0].description
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.projectintroduction[0].title
        },
        {
          hid: "twitter:site",
          property: "twitter:site",
          content:
            `https://txbit.academy` +
            "/project/" +
            this.projectintroduction[0].slug +
            "/"
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: this.api_url + this.projectintroduction[0].image_new.url
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
  }
};
</script>
