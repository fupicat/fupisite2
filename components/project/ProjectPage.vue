<template>
  <div :class="category">
    <page-header
      :url="category"
      :title="document.title"
      :description="document.description"
      :icon="document.icon"
      :posted="document.posted"
      :edited="document.edited"
      :tags="document.tags"
    />
    <container pad>
      <nuxt-content class="project" :document="document" />
      <project-info :document="document" />
      <client-only>
        <vssue
          v-if="$store.state.nfe.nfe && !document.nocomment"
          :title="this.$i18n.locale + ' / ' + category + ' / ' + document.title"
        />
      </client-only>
    </container>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
import Container from "~/components/Container.vue";
import ProjectInfo from "~/components/project/ProjectInfo.vue";
import VidYt from "~/components/blog/VidYt.vue";
import SobreMim from "~/components/unique/SobreMim.vue";
import Scratch from "~/components/blog/Scratch.vue";
import Itch from "~/components/blog/Itch.vue";

export default {
  components: {
    PageHeader,
    Container,
    ProjectInfo,
    VidYt,
    SobreMim,
    Scratch,
    Itch,
  },
  props: {
    document: Object,
    category: String,
  },
  head() {
    const tags = this.document.tags
      ? this.document.tags.replace(/#/g, "").replace(/ /g, ", ")
      : "";
    return {
      title: `${this.document.title} · Fupi`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.document.description,
        },
        { hid: "keywords", name: "keywords", content: tags },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.document.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.document.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.document.cover
            ? this.document.cover
            : this.document.icon,
        },
        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.document.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.document.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.document.cover
            ? this.document.cover
            : this.document.icon,
        },
      ],
    };
  },
};
</script>

<style></style>
