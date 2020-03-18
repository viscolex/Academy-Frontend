<template>
  <div>
    <div>
      <div class="uk-container uk-container-expand">
        <h2
          class="container-title uk-padding-small uk-padding-remove-right uk-padding-remove-left uk-padding-remove-bottom"
        >PROJECT INTRODUCTIONS</h2>
        <hr class="main-hr" />
        <ViewAllProjects></ViewAllProjects>
      </div>
    </div>
  </div>
</template>

<script>
import ViewAllProjects from "~/components/ViewAllProjects";

export default {
  data() {
    return {};
  },
  head() {
    return {
      title: "Project Introductions" + " | " + "Txbit Academy"
    };
  },
  components: {
    ViewAllProjects
  }
};
</script>
