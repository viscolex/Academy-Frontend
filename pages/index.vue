<template>
  <div>
    <div class="uk-section uk-padding-remove">
      <div class="uk-container uk-container-expand">
        <div class="uk-grid uk-grid-column-medium">
          <div class="uk-width-1-2@l">
            <div class="uk-clearfix animated fadeIn">
              <div>
                <h2
                  class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom"
                >
                  ARTICLES
                  <a
                    href="/viewall"
                    class="uk-float-right uk-card view-all-button uk-box-shadow-small"
                    id="link-hover"
                  >
                    <span class="navbar-item-text">VIEW ALL</span>
                    <i class="fas fa-arrow-alt-circle-right"></i>
                  </a>
                </h2>
                <hr class="main-hr" />
              </div>
            </div>

            <LatestArticles :articles="articles"></LatestArticles>
          </div>
          <div class="uk-width-1-4@l uk-width-1-2@s">
            <h2
              class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom animated fadeIn"
            >
              PROJECTS
              <a
                href="/projects"
                class="uk-float-right uk-card view-all-button uk-box-shadow-small"
                id="link-hover"
              >
                <span class="navbar-item-text">VIEW ALL</span>
                <i class="fas fa-arrow-alt-circle-right"></i>
              </a>
            </h2>
            <hr class="main-hr" />
            <LatestProjects :projectintroductions="projectintroductions"></LatestProjects>
          </div>
          <div class="uk-width-1-4@l uk-width-1-2@s">
            <h2
              class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom animated fadeIn"
            >TXBIT NEWS</h2>
            <hr class="main-hr" />
            <News />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import projectintroductionsQuery from "~/apollo/queries/project/projectintroductions";
import LatestArticles from "~/components/LatestArticles";
import LatestProjects from "~/components/LatestProjects";
import News from "~/components/News";

export default {
  data() {
    return {
      articles: [],
      projectintroductions: []
    };
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
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    },
    projectintroductions: {
      prefetch: true,
      query: projectintroductionsQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    }
  }
};
</script>
