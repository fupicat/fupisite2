<template>
  <project-page :category="category" :document="post" />
</template>

<script>
import ProjectPage from "~/components/project/ProjectPage.vue";
import ProjectLink from "~/components/project/ProjectLink.vue";

const category = "etc";

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
.etc .nuxt-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.etc .nuxt-content iframe {
  min-height: 400px;
  width: 100%;
}
</style>