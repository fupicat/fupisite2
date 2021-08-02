<template>
  <div>
    <page-header title="Blog" description="Coisas que eu escrevi" />
    <container pad>
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
    </container>
  </div>
</template>


<script>
import Container from '~/components/Container.vue';
import PageHeader from "~/components/PageHeader.vue";

export default {
  components: {
    PageHeader,
    Container,
  },
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