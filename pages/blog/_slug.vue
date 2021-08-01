<template>
  <div>
    <post-header :title="post.title" :description="post.description" :icon="post.icon" :created="post.createdAt" :updated="post.updatedAt" />
    <article class="my-2 mx-4">
      <nuxt-content :document="post" />
    </article>
    <div class="bg-purple-hov text-white py-2">
      <p class="font-bold text-xl text-center pb-2">Tags</p>
      <div class="flex flex-row justify-center gap-1">
        <tag-link v-for="tag in post.tags" :key="tag" :tag="tag" />
      </div>
    </div>
    <div class="commentbox"></div>
  </div>
</template>

<script>
import PostHeader from "~/components/blog/PostHeader.vue";
import TagLink from "~/components/blog/TagLink.vue";

import commentBox from 'commentbox.io';

export default {
  components: {
    PostHeader,
    TagLink,
  },
  mounted() {
    commentBox('5707504335978496-proj');
  },
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch();

    return { post }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description, },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        // Twitter
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description }
      ]
    }
  },
}
</script>

<style>
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 15px 15px;
}

.nuxt-content img {
  display: block;
  width: 100%;
  max-height: 700px;
  object-fit: contain;
}

.nuxt-content p {
  text-indent: 1.6em;
  margin: 1em 0px;
  text-align: justify;
}

.nuxt-content a {
  font-weight: bold;
  text-decoration: underline;
}

.nuxt-content h1 {
  display: block;
  font-size: 2em;
  margin: 0.67em 0px;
  font-weight: bold;
}

.nuxt-content h2 {
  display: block;
  font-size: 1.5em;
  margin: 0.83em 0px;
  font-weight: bold;
}

.nuxt-content h3 {
  display: block;
  font-size: 1.17em;
  margin: 1em 0px;
  font-weight: bold;
}

.nuxt-content img {
  margin: 1em 0px;
}

.nuxt-content ol {
  list-style: decimal;
  padding: 1rem 2rem;
}
</style>