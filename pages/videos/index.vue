<template>
  <category-view :category="category" :posts="posts" />
</template>

<script>
import CategoryView from '~/components/list/CategoryView.vue';

const category = "videos";

export default {
  components: {
    CategoryView,
  },
  data() {
    return {
      category
    }
  },
  async asyncData({ $content, store, app }) {
    let posts = []
    try {
      posts = await $content(`${app.i18n.locale}/${category}`)
        .only(['title', 'description', 'slug', 'icon', 'tags', 'posted', 'nfe'])
        .sortBy('posted', 'desc')
        .fetch();
    } finally {
      return {
        posts
      }
    }
  },
}
</script>

<style>

</style>