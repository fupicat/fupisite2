<template>
  <div class="post">
    <page-header url="blog" :title="post.title" :description="post.description" :icon="post.icon" :posted="post.posted" :edited="post.edited" :tags="post.tags" />
    <container pad>
      <nuxt-content :document="post" />
      <client-only>
        <vssue v-if="$store.state.nfe.nfe" :title="post.title" />
      </client-only>
    </container>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Container from '~/components/Container.vue';

export default {
  components: {
    PageHeader,
    Container,
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
/* Content */

.dark .post .nuxt-content {
  color: var(--purple-textdark);
}

.post .nuxt-content img {
  margin: 1em 0px;
  display: block;
  width: 100%;
  max-height: 50vh;
  object-fit: contain;
}

.post .nuxt-content p {
  text-indent: 1.6em;
  margin: 1em 0px;
  text-align: justify;
}

.post .nuxt-content a {
  color: var(--purple-nav);
  text-decoration: none;
}

.post .nuxt-content a:hover {
  text-decoration: underline;
}

.dark .post .nuxt-content a {
  color: var(--purple-hov);
}

.post .nuxt-content h1 {
  display: block;
  font-size: 2em;
  margin: 0.67em 0px;
  font-weight: bold;
}

.post .nuxt-content h2 {
  display: block;
  font-size: 1.5em;
  margin: 0.83em 0px;
  font-weight: bold;
}

.post .nuxt-content h3 {
  display: block;
  font-size: 1.17em;
  margin: 1em 0px;
  font-weight: bold;
}

.post .nuxt-content ol {
  list-style: decimal;
  padding: 1rem 2rem;
}
</style>