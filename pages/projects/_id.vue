<template>
  <div>
    <div class="uk-container uk-container-expand">
      <h2
        class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom "
      >
        PROJECT INTRODUCTIONS
      </h2>
      <hr class="main-hr" />
      <ViewAllProjects
        :projectintroductions="projectintroductions"
      ></ViewAllProjects>
    </div>
  </div>
</template>

<script>
import projectintroductionsQuery from "~/apollo/queries/project/projectintroductions";
import ViewAllProjects from "~/components/ViewAllProjects";
var moment = require("moment");

export default {
  data() {
    return {
      projectintroductions: [],
      moment: moment
    };
  },
  head() {
    return {
      title: "Project Introductions" + " | " + "Txbit Academy"
    };
  },
  components: {
    ViewAllProjects
  },
  apollo: {
    projectintroductions: {
      prefetch: true,
      query: projectintroductionsQuery
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>
