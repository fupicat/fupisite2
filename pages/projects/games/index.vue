<template>
  <div :class="category">
    <page-header :icon="`/img/${category}.png`" :title="$t(category)" :description="$t(`${category}Desc`)" />
    <container>
      <search :query="query" :type="content" @SearchChanged="refresh" />
    </container>
    <thing-list>
      <thing-item v-for="post of posts" :key="post.slug"
        :path="`projects/${category}`"
        :slug="post.slug"
        :title="post.title"
        :description="post.description"
        :icon="post.icon"
        :posted="post.posted"
        showdate
      />
    </thing-list>
  </div>
</template>

<script>
import Container from '~/components/Container.vue';
import ThingList from '~/components/list/ThingList.vue';
import ThingItem from '~/components/list/ThingItem.vue';
import PageHeader from "~/components/PageHeader.vue";
import Search from "~/components/list/Search.vue";

export default {
  components: {
    PageHeader,
    Container,
    ThingList,
    ThingItem,
    Search,
  },
  data() {
    return {
      query: "",
    }
  },
  async asyncData({ $content, app }) {
    const category = "games";
    const content = `${app.i18n.locale}/projects/${category}`;
    let posts = []
    try {
      posts = await $content(content)
        .only(['title', 'description', 'slug', 'icon', 'tags', 'posted'])
        .sortBy('posted', 'desc')
        .fetch();
    } finally {
      return {
        posts,
        content,
        category,
      }
    }
  },
  methods: {
    refresh(results) {
      this.posts = results;
    },
  },
  mounted() {
    let query = this.$route.query.q;
    if (query) this.query = query;
  },
  head() {
    return {
      title: this.$t(this.category) + " · Fupi",
      meta: [
        { hid: 'description', name: 'description', content: this.$t("fupiDesc"), },
        { hid: 'keywords', name: 'keywords', content: this.$t("fupiTags")},
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: "Fupi" },
        { hid: 'og:description', property: 'og:description', content: this.$t("fupiDesc") },
        // Twitter
        { hid: 'twitter:title', name: 'twitter:title', content: "Fupi" },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t("fupiDesc") }
      ]
    }
  }
}
</script>

<style>

</style>