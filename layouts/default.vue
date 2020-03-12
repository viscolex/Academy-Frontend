<template>
  <div>
    <TheNavbar />
    <nuxt style="min-height: 96vh;" />
    <TheFooter />
  </div>
</template>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130503642-2"></script>

<script>
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-130503642-2");
</script>

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
