<template>
  <div class="uk-text-center mt-3">
    <img src="~/assets/images/404.jpg" /><br /><br />
    <nuxt-link to="/">Go To Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "default" // you can set a custom layout for the error page
};
</script>
