<template>
  <div>
    <div class="uk-grid uk-grid-match uk-grid-column-small">
      <router-link
        v-for="projectintroduction in projectintroductions
          .slice(0, 2)
          .reverse()"
        :key="projectintroduction.id"
        :to="{
          name: 'project-id',
          params: { id: projectintroduction.id }
        }"
        class="uk-width-1 uk-width-1-2@s uk-width-1-4@l"
      >
        <div
          class="uk-card uk-margin-bottom card-background uk-box-shadow-small"
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
                <span id="content">{{
                  projectintroduction.short_description
                }}</span>
              </div>
              <div class="uk-width-1-4 pl-0 p-2 pb-1">
                <img
                  v-show="projectintroduction.image_new"
                  class="uk-card-media-top"
                  :src="api_url + projectintroduction.image_new.url"
                  fluid-grow
                  alt="Fluid-grow image"
                  style="pointer-events: none;"
                />
              </div>
            </div>
            <div class="uk-clearfix pt-0">
              <div class="uk-float-right pb-1">
                <div
                  class="uk-button uk-button-default uk-button-small uk-button-text"
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
              <div class="uk-float-left">
                <span id="date" v-show="projectintroduction.published_at">
                  {{
                    moment(projectintroduction.published_at).format(
                      "Do MMM YYYY"
                    )
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
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
