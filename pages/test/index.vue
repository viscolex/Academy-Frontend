<template>
  <div id="news-container" v-show="txbitnewsposts != null || undefined">
    <div class="uk-grid uk-grid-match hide-scrollbar">
      <div v-for="newspost in txbitNewsPosts" :key="newspost.slug" style="width:100%">
        <div class="uk-card uk-margin-bottom container-fluid card-background uk-box-shadow-small">
          <div class="p-2">
            <div class="row">
              <div
                v-show="newspost.url"
                id="title-news"
                class="title-bottom-border"
                style="width:100%;"
              >
                {{ newspost.title }}
                <div v-show="newspost.url" class="uk-inline">
                  <a :href="newspost.url">
                    <fa
                      :icon="['fas', 'external-link-alt']"
                      class="news-link mb-1"
                      style="color:#ffb300; font-size:.9rem"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <span id="content" v-show="newspost.content">
                {{
                newspost.content
                }}
              </span>
            </div>
            <div class="row">
              <div class="uk-clearfix">
                <div class="uk-float-right">
                  <span
                    id="date"
                    v-show="newspost.published_at"
                  >{{ $moment(newspost.published_at).format("Do MMM YYYY") }}</span>
                </div>
              </div>
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
      txbitnewsposts: []
    };
  },
  async fetch() {
    this.txbitnewsposts = await this.$axios.$get(
      "http://localhost:1337/txbitnewsposts"
    );
  },
  computed: {
    txbitNewsPosts() {
      return this.txbitnewsposts.reverse().slice(0, 10);
    }
  }
};
</script>
