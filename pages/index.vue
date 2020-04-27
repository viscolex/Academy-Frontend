<template>
  <div>
    <div class="uk-section uk-padding-remove">
      <div class="uk-container uk-container-expand">
        <div class="uk-grid uk-grid-column-medium">
          <div class="uk-width-1-2@l">
            <div class="uk-clearfix">
              <div>
                <h2
                  class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom"
                >
                  ARTICLES
                  <a
                    href="/viewall"
                    class="uk-float-right uk-card view-all-button uk-visible@s"
                    id="link-hover"
                  >
                    <span class="navbar-item-text">VIEW ALL</span>
                    <fa :icon="['fas', 'arrow-alt-circle-right']" />
                  </a>
                </h2>
                <hr class="main-hr" />
              </div>
            </div>

            <LatestArticles></LatestArticles>
            <div class="uk-hidden@s uk-text-center">
              <a
                href="/viewall"
                class="uk-card view-all-button"
                id="link-hover"
              >
                <span class="navbar-item-text">VIEW ALL ARTICLES</span>
                <fa :icon="['fas', 'arrow-alt-circle-right']" />
              </a>
            </div>
          </div>
          <div class="uk-width-1-4@l uk-width-1-2@s">
            <h2
              class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom"
            >
              PROJECTS
            </h2>
            <hr class="main-hr" />
            <LatestProjects></LatestProjects>
            <div class="uk-hidden@s uk-text-center">
              <a
                href="/projects"
                class="uk-card view-all-button"
                id="link-hover"
              >
                <span class="navbar-item-text">VIEW ALL PROJECTS</span>
                <fa :icon="['fas', 'arrow-alt-circle-right']" />
              </a>
            </div>
          </div>
          <div class="uk-width-1-4@l uk-width-1-2@s">
            <h2
              class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom"
            >
              TXBIT NEWS
            </h2>
            <hr class="main-hr" />
            <News />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LatestArticles from "~/components/LatestArticles";
import LatestProjects from "~/components/LatestProjects";
import News from "~/components/News";

export default {
  data() {
    return {};
  },
  head() {
    return {
      title: "Txbit Academy" + " | " + "Blockchain Education"
    };
  },
  components: {
    LatestArticles,
    LatestProjects,
    News
  }
};
</script>
