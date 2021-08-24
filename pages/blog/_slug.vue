<template>
  <div>
    <page-header :title="post.title" :description="post.description" :icon="post.icon" :posted="post.posted" :edited="post.edited" :tags="post.tags" />
    <container pad>
      <nuxt-content :document="post" />
      <div class="commentbox"></div>
    </container>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Container from '~/components/Container.vue';

import commentBox from 'commentbox.io';

export default {
  components: {
    PageHeader,
    Container,
  },
  mounted() {
    let removeComments = commentBox('5707504335978496-proj');

    window.onkeydown = function() {
      removeComments();
      console.log("oh");
      removeComments = commentBox('5707504335978496-proj', {
        textColor: '#fff',
      });
    }
  },
  async asyncData({ $content, params, app }) {
    const post = await $content(`${app.i18n.locale}/blog`, params.slug).fetch();

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
  width: 100%;
  display: block;
  height: 25px;
  position: absolute;
}

.dark .nuxt-content {
  color: var(--purple-textdark);
}

.nuxt-content img {
  margin: 1em 0px;
  display: block;
  width: 100%;
  max-height: 50vh;
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

.nuxt-content ol {
  list-style: decimal;
  padding: 1rem 2rem;
}
</style>