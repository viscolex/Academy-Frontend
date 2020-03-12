<template>
  <div>
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
          <p
            id="title-news"
            class="uk-margin-remove-top title-bottom-border title-articles"
          >
            {{ projectintroduction.title }}
          </p>
          <div class="uk-grid">
            <div class="uk-width-3-4">
              <span id="content">
                {{ projectintroduction.short_description }}
              </span>
            </div>
            <div class="uk-width-1-4 pl-0 p-2 pb-1">
              <div
                v-if="projectintroduction.image_src"
                class="uk-card-media-top"
              >
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
            <div class="uk-float-right pb-1 uk-visible@xl">
              <div
                :to="{
                  name: 'projects-id',
                  params: { id: projectintroduction.id }
                }"
                class="uk-button uk-button-default uk-button-small p-0"
                id="button-hover"
              >
                <span class="navbar-item-text">
                  Learn About
                  {{ projectintroduction.ticker }}
                </span>
                <i class="fas fa-arrow-circle-right ml-1"></i>
              </div>
            </div>
            <div class="uk-text-center pb-0 uk-hidden@xl">
              <div
                :to="{
                  name: 'projects-id',
                  params: { id: projectintroduction.id }
                }"
                class="uk-button uk-button-default uk-button-small pl-1 pt-1"
                id="button-hover"
              >
                <span class="navbar-item-text">
                  Learn About
                  {{ projectintroduction.ticker }}
                </span>
                <i class="fas fa-arrow-circle-right ml-1"></i>
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
