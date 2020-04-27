<template>
  <div>
    <nav class="uk-navbar-container bg-dark uk-sticky uk-navbar">
      <div class="uk-navbar-left">
        <nuxt-link class="uk-navbar-item uk-logo" style="padding: 0 2px;" to="/">
          <div class="nav-brand-img"></div>
        </nuxt-link>

        <ul class="uk-navbar-nav uk-visible@s">
          <li
            :class="[
              currentPage.includes('categories') ||
              currentPage.includes('viewall') ||
              currentPage.includes('article')
                ? activeClass
                : '',
              'navbar-item'
            ]"
            id="link-hover"
          >
            <router-link to="/viewall" class="px-2">
              <fa icon="list" class="text-warning navbar-item mr-1" />
              <span class="navbar-item navbar-item-text">ARTICLES</span>
            </router-link>
          </li>
          <li
            :class="[
              currentPage.includes('projects') ||
              currentPage.includes('project')
                ? activeClass
                : '',
              'navbar-item'
            ]"
            id="link-hover"
          >
            <router-link to="/projects" class="px-2">
              <fa icon="book" class="text-warning navbar-item mr-1" />
              <span class="navbar-item navbar-item-text">Projects</span>
            </router-link>
          </li>
          <li id="link-hover">
            <a href="https://txbit.io" class="px-2">
              <fa icon="exchange-alt" class="text-warning navbar-item mr-1" />
              <span class="navbar-item navbar-item-text">EXCHANGE</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right mr-4 pt-1 uk-visible@s">
        <input
          class="uk-radio"
          hidden
          type="radio"
          id="one"
          value="dark"
          v-model="$colorMode.preference"
        />
        <label for="one" v-if="$colorMode.preference === 'light'">
          <fa icon="moon" class="text-secondary" style="font-size:1.6em" />
        </label>
        <div></div>
        <input
          class="uk-radio"
          hidden
          type="radio"
          id="two"
          value="light"
          v-model="$colorMode.preference"
        />
        <label for="two" v-if="$colorMode.preference === 'dark'">
          <fa icon="sun" class="text-warning" style="font-size:1.6em" />
        </label>
      </div>
      <div class="uk-navbar-right mr-5 pt-2 uk-hidden@s">
        <input
          class="uk-radio"
          hidden
          type="radio"
          id="one"
          value="dark"
          v-model="$colorMode.preference"
        />
        <label for="one" v-if="$colorMode.preference === 'light'">
          <fa icon="moon" class="text-secondary" style="font-size:1.6em" />
        </label>
        <div></div>
        <input
          class="uk-radio"
          hidden
          type="radio"
          id="two"
          value="light"
          v-model="$colorMode.preference"
        />
        <label for="two" v-if="$colorMode.preference === 'dark'">
          <fa icon="sun" class="text-warning" style="font-size:1.6em" />
        </label>
      </div>
      <div class="uk-hidden@s uk-position-center-right mr-3" style="margin-left=0">
        <a href="#modal-full" uk-toggle>
          <span id="modal-button" uk-icon="icon: table"></span>
        </a>
      </div>
    </nav>
    <div
      class="uk-hidden@s uk-modal-full uk-modal"
      id="modal-full"
      uk-modal
      style="padding-top:46px;"
    >
      <div class="uk-modal-dialog navbar-mobile-dropdown">
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
          <div class="my-2">
            <div class="uk-width-1-2@s">
              <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                <li
                  :class="[
                    currentPage.includes('categories') ||
                    currentPage.includes('viewall') ||
                    currentPage.includes('article')
                      ? activeClass
                      : '',
                    'navbar-item'
                  ]"
                  id="link-hover"
                >
                  <router-link to="/viewall">
                    <fa icon="list" class="text-warning navbar-item mr-1 ml-3" />
                    <span class="navbar-item navbar-item-text">ARTICLES</span>
                  </router-link>
                </li>
                <li
                  :class="[
                    currentPage.includes('projects') ||
                    currentPage.includes('project')
                      ? activeClass
                      : '',
                    'navbar-item'
                  ]"
                  id="link-hover"
                >
                  <router-link to="/projects" id="link-hover">
                    <fa icon="book" class="text-warning navbar-item mr-1 ml-3" />
                    <span class="navbar-item navbar-item-text">PROJECTS</span>
                  </router-link>
                </li>
                <li>
                  <a href="https://txbit.io" id="link-hover">
                    <fa icon="exchange-alt" class="text-warning navbar-item mr-1 ml-3" />
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
