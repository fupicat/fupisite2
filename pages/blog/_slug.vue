<template>
  <div>
    <post-header :title="post.title" :description="post.description" :icon="post.icon" />
    <article class="m-2">
      <nuxt-content :document="post" />
      <ul>
        <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
      </ul>
      <p>Postado dia {{ formatDate(post.createdAt) }}</p>
      <p v-if="post.updatedAt && (post.createdAt != post.updatedAt)">Editado pela última vez dia {{ formatDate(post.updatedAt) }}</p>
    </article>
  </div>
</template>

<script>
import PostHeader from "~/components/blog/PostHeader.vue";

export default {
  components: {
    PostHeader,
  },
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();

    return { post }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt', options)
    }
  }
}
</script>

<style>
.nuxt-content ol {
  list-style: decimal;
  padding: 1rem 2rem;
}
</style>