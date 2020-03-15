<template>
  <div>
    <nav uk-sticky class="uk-navbar-container bg-dark" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" style="padding: 0 2px;" href="/">
          <div class="nav-brand-img"></div>
        </a>

        <ul class="uk-navbar-nav uk-visible@s">
          <li
            :class="[currentPage.includes('categories') || currentPage.includes('viewall') || currentPage.includes('article') ? activeClass : '','navbar-item']"
            id="link-hover"
          >
            <router-link to="/viewall" class="px-2">
              <i class="navbar-item fas fa-list text-warning mr-1"></i>
              <span class="navbar-item navbar-item-text">ARTICLES</span>
            </router-link>
          </li>
          <li
            :class="[currentPage.includes('projects') || currentPage.includes('project') ? activeClass : '','navbar-item']"
            id="link-hover"
          >
            <router-link to="/projects" class="px-2">
              <i class="navbar-item fas fa-book text-warning mr-1"></i>
              <span class="navbar-item navbar-item-text">Projects</span>
            </router-link>
          </li>
          <li id="link-hover">
            <a href="https://txbit.io" class="px-2">
              <i class="navbar-item fas fa-exchange-alt text-warning mr-1"></i>
              <span class="navbar-item navbar-item-text">EXCHANGE</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="uk-hidden@s uk-navbar-right mr-3">
        <a href="#modal-full" uk-toggle>
          <span uk-icon="icon: table"></span>
        </a>
      </div>
    </nav>
    <div class="uk-hidden@s uk-modal-full" id="modal-full" uk-modal style="padding-top:46px;">
      <div class="uk-modal-dialog navbar-mobile-dropdown">
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
          <div class="mx-4 my-2">
            <div class="uk-width-1-2@s">
              <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                <li
                  :class="[currentPage.includes('categories') || currentPage.includes('viewall') || currentPage.includes('article') ? activeClass : '','navbar-item']"
                  id="link-hover"
                >
                  <a href="/viewall">
                    <i class="navbar-item fas fa-list text-warning mr-1 ml-3"></i>
                    <span class="navbar-item navbar-item-text">ARTICLES</span>
                  </a>
                </li>
                <li
                  :class="[currentPage.includes('projects') || currentPage.includes('project') ? activeClass : '','navbar-item']"
                  id="link-hover"
                >
                  <a href="/projects" id="link-hover">
                    <i class="navbar-item fas fa-book text-warning mr-1 ml-3"></i>
                    <span class="navbar-item navbar-item-text">PROJECTS</span>
                  </a>
                </li>
                <li>
                  <a href="https://txbit.io" id="link-hover">
                    <i class="navbar-item fas fa-exchange-alt text-warning mr-1 ml-3"></i>
                    <span class="navbar-item navbar-item-text">EXCHANGE</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "active-link"
    };
  },
  computed: {
    currentPage() {
      return this.$route.path;
    }
  }
};
</script>
