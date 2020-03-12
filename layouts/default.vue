<template>
  <div>
    <TheNavbar />
    <nuxt style="min-height: 96vh;" />
    <TheFooter />
  </div>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>
