<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <img :src="post.icon" />
          <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('blog')
      .only(['title', 'description', 'slug', 'icon', 'tags'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts
    }
  }
}
</script>

<style>

</style>