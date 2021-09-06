<template>
  <project-page :category="category" :document="post" />
</template>

<script>
import ProjectPage from "~/components/project/ProjectPage.vue";
import ProjectLink from "~/components/project/ProjectLink.vue";

const category = "tools";

export default {
  components: { ProjectPage, ProjectLink, },
  data() {
    return {
      category,
    }
  },
  async asyncData({ $content, params, app }) {
    const post = await $content(`${app.i18n.locale}/${category}`, params.slug).fetch();

    return { post }
  },
}
</script>

<style>
.tools .nuxt-content {
  display: flex;
  justify-content: center;
}
</style>