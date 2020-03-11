<template>
  <div>
    <div class="uk-grid uk-grid-match uk-grid-column-small">
      <router-link
        v-for="projectintroduction in projectintroductions.slice(0,2).reverse()"
        :key="projectintroduction.id"
        :to="{
          name: 'project-id',
          params: { id: projectintroduction.id }
        }"
        class="uk-width-1 uk-width-1-2@s uk-width-1-4@m"
      >
        <div
          class="uk-card uk-margin-bottom card-background uk-box-shadow-small animated fadeIn"
          id="introduction-card"
        >
          <div class="uk-padding-small pt-2 pb-2" id="link-hover">
            <p
              id="title-news"
              class="uk-margin-remove-top title-bottom-border title-articles"
            >{{ projectintroduction.title }}</p>
            <div class="uk-grid">
              <div class="uk-width-3-4">
                <span id="content">
                  {{
                  projectintroduction.short_description
                  }}
                </span>
              </div>
              <div class="uk-width-1-4 pl-0 p-2 pb-1">
                <div v-if="projectintroduction.image_src" class="uk-card-media-top">
                  <img
                    :src="projectintroduction.image_src"
                    fluid-grow
                    alt="Fluid-grow image"
                    style="pointer-events: none;"
                  />
                </div>
              </div>
            </div>
            <div class="uk-clearfix pt-0">
              <div class="uk-float-right pb-1">
                <div
                  :to="{
                    name: 'projects-id',
                    params: { id: projectintroduction.id }
                  }"
                  class="uk-button uk-button-default uk-button-small uk-button-text"
                  id="button-hover"
                >
                  <span class="navbar-item-text">
                    Learn About
                    {{ projectintroduction.ticker }}
                  </span>
                  <i class="fas fa-arrow-circle-right ml-1"></i>
                </div>
              </div>
              <div class="uk-float-left">
                <span id="date">{{ moment(projectintroduction.published_at).format("Do MMM YYYY") }}</span>
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
      moment: moment
    };
  },
  apollo: {
    projectintroductions: {
      prefeth: true,
      query: projectintroductionsQuery
    }
  }
};
</script>
