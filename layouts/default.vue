<template>
  <div>
    <TheNavbar />
    <nuxt keep-alive style="min-height: 96vh;" />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>
