<template>
  <div>
    <page-header :title="post.title" :description="post.description" :icon="post.icon" :posted="post.posted" :edited="post.edited" :tags="post.tags" />
    <container pad>
      <nuxt-content :document="post" />
      <client-only>
        <vssue :title="post.title" />
      </client-only>
      <!--
      <div class="commentbox">
        <iframe :src="`https://app.commentbox.io/5707504335978496-proj?id=commentbox&amp;url=${url}%23commentbox&amp;tlc_param=tlc&amp;background_color=&amp;text_color=${$store.state.dark.dark ? 'white' : 'black'}&amp;subtext_color=&amp;sort_order=best`" scrolling="no" style="width: 100%" data-comments-loaded="true" height="377px" frameborder="0"></iframe>
      </div>
      -->
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
  data() {
    return {
      url: "",
    }
  },
  async asyncData({ $content, params, app }) {
    const post = await $content(`${app.i18n.locale}/blog`, params.slug).fetch();

    return { post }
  },
  mounted() {
    this.url = encodeURIComponent(window.location.origin + window.location.pathname);
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
  color: var(--purple-nav);
}

.dark .nuxt-content a {
  color: var(--purple-hov);
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

/* Vssue */

.dark .markdown-body {
  color: var(--purple-textdark);
}

.vssue .vssue-comments .vssue-comment .vssue-comment-body {
  background-color: white;
  border-radius: 0px 10px 10px 10px;
}

.dark .vssue .vssue-comments .vssue-comment .vssue-comment-body {
  background-color: var(--purple-navdark);
}

.vssue .vssue-comments .vssue-comment .vssue-comment-body div {
  padding: 6px 12px;
  border: 0px;
}

.vssue .vssue-comments .vssue-comment .vssue-comment-footer {
  display: flex;
  justify-content: space-between;
}

.vssue .vssue-comments .vssue-comment .vssue-comment-footer .vssue-comment-reactions {
  display: flex;
  gap: 6px;
}

.vssue .vssue-comments .vssue-comment .vssue-comment-footer .vssue-comment-reactions .vssue-comment-reaction {
  color: black;
  display: flex;
  align-items: center;
  gap: 3px;
}

.dark .vssue .vssue-comments .vssue-comment .vssue-comment-footer .vssue-comment-reactions .vssue-comment-reaction {
  color: var(--purple-textdark);
}

.vssue .vssue-icon {
  fill: var(--purple-nav);
}

.dark .vssue-icon {
  fill: var(--purple-hov);
}

.vssue .vssue-comments .vssue-comment .vssue-comment-footer .vssue-comment-operations {
  display: flex;
  align-items: center;
}

.vssue :not(.vssue-comment-content) a {
  color: var(--purple-nav);
}

.dark .vssue :not(.vssue-comment-content) a {
  color: var(--purple-hov);
}

.vssue .vssue-header, .vssue .vssue-new-comment {
  border: 0px;
}

.vssue {
  color: black;
  font-size: 1em;
}

.dark .vssue {
  color: var(--purple-textdark);
}

.vssue .vssue-comments .vssue-comment .vssue-comment-header .vssue-comment-created-at {
  color: var(--purple-hov2);
}
</style>