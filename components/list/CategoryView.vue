<template>
  <div :class="category">
    <page-header :icon="`/img/${category}.png`" :title="$t(category)" :description="$t(`${category}Desc`)" />
    <container>
      <search :query="query" :type="category" @SearchChanged="refresh" />
    </container>
    <thing-list>
      <thing-item v-for="post of filteredPosts" :key="post.slug"
        :path="category"
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
  props: {
    category: String,
    posts: Array,
  },
  data() {
    return {
      query: "",
    }
  },
  computed: {
    filteredPosts() {
      if (!this.$store.state.nfe.nfe) {
        return this.posts.filter(x => x.nfe !== true);
      } else {
        return this.posts;
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
        { hid: 'description', name: 'description', content: this.$t(`${this.category}Desc`), },
        { hid: 'keywords', name: 'keywords', content: this.$t("fupiTags")},
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.$t(this.category) + " · Fupi" },
        { hid: 'og:description', property: 'og:description', content: this.$t(`${this.category}Desc`) },
        // Twitter
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t(this.category) + " · Fupi" },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t(`${this.category}Desc`) }
      ]
    }
  }
}
</script>

<style>

</style>