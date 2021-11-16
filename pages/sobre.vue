<template>
  <project-page category="blog" :document="post" />
</template>

<script>
import ProjectPage from "~/components/project/ProjectPage.vue";

export default {
  components: { ProjectPage, },
  async asyncData({ $content, app }) {
    const post = await $content(app.i18n.locale, "sobre").fetch();

    return { post }
  },
}
</script>

<style>

</style>