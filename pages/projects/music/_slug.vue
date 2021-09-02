<template>
  <div :class="category">
    <page-header :url="`projects/${category}`" :title="post.title" :description="post.description" :icon="post.icon" :posted="post.posted" :edited="post.edited" :tags="post.tags" />
    <container pad>
      <nuxt-content class="project" :document="post" />
      <project-info :document="post" />
      <client-only>
        <vssue v-if="$store.state.nfe.nfe" :title="post.title" />
      </client-only>
    </container>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Container from '~/components/Container.vue';
import ProjectInfo from '~/components/project/ProjectInfo.vue';

export default {
  components: {
    PageHeader,
    Container,
    ProjectInfo,
  },
  async asyncData({ $content, params, app }) {
    const category = "music";
    const post = await $content(`${app.i18n.locale}/projects/${category}`, params.slug).fetch();

    return { post, category }
  },
  head() {
    console.log(this.post.tags);
    const tags = this.post.tags.replace(/#/g, "").replace(/ /g, ", ");
    return {
      title: `${this.post.title} · "Fupi"`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description, },
        { hid: 'keywords', name: 'keywords', content: tags},
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
.nuxt-content audio {
  width: 100%;
  border-radius: 0.4rem;
}
</style>