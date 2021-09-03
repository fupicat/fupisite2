<template>
  <project-page :category="category" :document="post" />
</template>

<script>
import ProjectPage from "~/components/project/ProjectPage.vue";

const category = "games";

export default {
  components: { ProjectPage, },
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
.nuxt-content {
  display: flex;
  justify-content: center;
}
</style>