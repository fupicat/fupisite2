<template>
  <div :class="category">
    <page-header :url="category" :title="document.title" :description="document.description" :icon="document.icon" :posted="document.posted" :edited="document.edited" :tags="document.tags" />
    <container pad>
      <nuxt-content class="project" :document="document" />
      <project-info :document="document" />
      <client-only>
        <vssue v-if="$store.state.nfe.nfe" :title="document.title" />
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
  props: {
    document: Object,
    category: String,
  },
  head() {
    const tags = this.document.tags.replace(/#/g, "").replace(/ /g, ", ");
    return {
      title: `${this.document.title} · Fupi`,
      meta: [
        { hid: 'description', name: 'description', content: this.document.description, },
        { hid: 'keywords', name: 'keywords', content: tags},
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.document.title },
        { hid: 'og:description', property: 'og:description', content: this.document.description },
        // Twitter
        { hid: 'twitter:title', name: 'twitter:title', content: this.document.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.document.description }
      ]
    }
  },
}
</script>

<style>

</style>