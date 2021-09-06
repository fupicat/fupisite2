<template>
  <project-page :category="category" :document="post" />
</template>

<script>
import ProjectPage from "~/components/project/ProjectPage.vue";

const category = "videos";

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
.videos .nuxt-content {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .videos .nuxt-content iframe {
    width: 560px;
  }
}
</style>