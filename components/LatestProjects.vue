<template>
  <div v-if="projectintroductions != null || undefined">
    <router-link
      v-for="projectintroduction in projectintroductions.slice(0, 2).reverse()"
      :key="projectintroduction.id"
      :to="{
        name: 'project-id',
        params: { id: projectintroduction.id }
      }"
    >
      <div
        class="uk-card uk-margin-bottom card-background uk-box-shadow-medium "
        id="introduction-card"
      >
        <div class="uk-padding-small pt-2 pb-2" id="link-hover">
          <div
            id="title-news"
            class="uk-margin-remove-top title-bottom-border title-articles"
            v-show="projectintroduction.title"
          >
            {{ projectintroduction.title }}
          </div>
          <div class="uk-grid">
            <div class="uk-width-3-4">
              <span v-show="projectintroduction.short_description" id="content">
                {{ projectintroduction.short_description }}
              </span>
            </div>
            <div class="uk-width-1-4 pl-0 p-2 pb-1">
              <img
                v-show="projectintroduction.image_new"
                :src="api_url + projectintroduction.image_new.url"
                fluid-grow
                alt="Fluid-grow image"
                style="pointer-events: none;"
                class="uk-card-media-top"
              />
            </div>
          </div>
          <div class="uk-clearfix pt-0">
            <div class="uk-float-right pb-1 uk-visible@xl">
              <div
                class="uk-button uk-button-default uk-button-small p-0"
                id="button-hover"
              >
                <span
                  class="navbar-item-text"
                  v-show="projectintroduction.ticker"
                >
                  Learn About
                  {{ projectintroduction.ticker }}
                </span>
                <fa :icon="['fas', 'arrow-alt-circle-right']" />
              </div>
            </div>
            <div class="uk-text-center pb-0 uk-hidden@xl">
              <div
                class="uk-button uk-button-default uk-button-small pl-1 pt-1"
                id="button-hover"
              >
                <span
                  class="navbar-item-text"
                  v-show="projectintroduction.ticker"
                >
                  Learn About
                  {{ projectintroduction.ticker }}
                </span>
                <fa :icon="['fas', 'arrow-alt-circle-right']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import projectintroductionsQuery from "~/apollo/queries/project/projectintroductions";
var moment = require("moment");

export default {
  data() {
    return {
      projectintroductions: [],
      moment: moment,
      api_url: process.env.strapiBaseUri
    };
  },
  apollo: {
    projectintroductions: {
      prefetch: true,
      query: projectintroductionsQuery
    }
  }
};
</script>
