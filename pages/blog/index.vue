<template>
  <div>
    <page-header :title="$t('blog')" :description="$t('blogDesc')" />
    <container>
      <search :query="query" :type="content" @SearchChanged="refresh" />
    </container>
    <thing-list>
      <thing-item v-for="post of posts" :key="post.slug"
        :slug="post.slug"
        :title="post.title"
        :description="post.description"
        :icon="post.icon"
        :posted="post.posted"
        showdate
        class="blog"
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
    const content = `${app.i18n.locale}/blog`;
    const posts = await $content(content)
      .only(['title', 'description', 'slug', 'icon', 'tags', 'posted'])
      .sortBy('posted', 'desc')
      .fetch();

    return {
      posts,
      content,
    }
  },
  methods: {
    refresh(results) {
      this.posts = results;
      console.log(results);
    }
  },
  mounted() {
    let query = this.$route.query.q;
    if (query) this.query = query;
  }
}
</script>

<style scoped>

</style>