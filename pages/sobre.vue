<template>
  <project-page category="blog" :document="post" />
</template>

<script>
import ProjectPage from "~/components/project/ProjectPage.vue";

export default {
  components: { ProjectPage },
  async asyncData({ $content, app }) {
    const post = await $content(app.i18n.locale, "sobre").fetch();

    return { post };
  },
  head() {
    return {
      title: this.$t("sobre") + " · Fupi",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("sobreDesc"),
        },
        { hid: "keywords", name: "keywords", content: this.$t("fupiTags") },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/covers/Generica.png",
        },
        // Open Graph
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("sobre") + " · Fupi",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("sobreDesc"),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/covers/Generica.png",
        },
        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("sobre") + " · Fupi",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("sobreDesc"),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/img/covers/Generica.png",
        },
      ],
    };
  },
};
</script>

<style></style>
