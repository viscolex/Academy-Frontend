<template>
  <div id="news-container">
    <div class="uk-grid uk-grid-match hide-scrollbar">
      <div
        v-for="newspost in txbitnewsposts.reverse().slice(0, 10)"
        :key="newspost.id"
        style="width:100%"
      >
        <div
          class="uk-card uk-margin-bottom container-fluid card-background uk-box-shadow-small animated fadeIn"
        >
          <div class="p-2">
            <div class="row">
              <h4 id="title-news" class="title-bottom-border" style="width:100%;">
                {{ newspost.title }}
                <div v-if="newspost.url" class="uk-inline">
                  <a :href="newspost.url">
                    <i
                      class="fas fa-external-link-alt ml-1 mb-1 news-link"
                      style="color:#ffb300; font-size:.9rem"
                    ></i>
                  </a>
                </div>
              </h4>
            </div>
            <div class="row">
              <span id="content">{{ newspost.content }}</span>
            </div>
            <div class="row">
              <div class="uk-clearfix">
                <div class="uk-float-right">
                  <span id="date">
                    {{
                    moment(newspost.published_at).format("Do MMM YYYY")
                    }}
                  </span>
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
import txbitnewspostsQuery from "~/apollo/queries/txbitnewsposts/txbitnewsposts";
var moment = require("moment");

export default {
  data() {
    return {
      txbitnewsposts: [],
      moment: moment
    };
  },
  apollo: {
    txbitnewsposts: {
      prefeth: true,
      query: txbitnewspostsQuery
    }
  }
};
</script>
