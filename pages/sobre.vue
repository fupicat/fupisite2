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
  head() {
    return {
      title: this.$t("sobre") + " · Fupi",
      meta: [
        { hid: 'description', name: 'description', content: this.$t("sobreDesc"), },
        { hid: 'keywords', name: 'keywords', content: this.$t("fupiTags")},
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.$t("sobre") + " · Fupi" },
        { hid: 'og:description', property: 'og:description', content: this.$t("sobreDesc") },
        // Twitter
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t("sobre") + " · Fupi" },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t("sobreDesc") }
      ]
    }
  }
}
</script>

<style>

</style>