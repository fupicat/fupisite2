<template>
  <project-page :category="category" :document="post" />
</template>

<script>
import ProjectPage from "~/components/project/ProjectPage.vue";

const category = "musica";

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
.nuxt-content audio {
  width: 100%;
  border-radius: 0.4rem;
}
</style>