<template>
  <div>
    <page-header :title="$t('projetos')" :description="$t('projetosDesc')" />
    <container pad class="categories">
      <div v-if="$i18n.locale == 'en'" class="warning">
        <h1><i class="fas fa-exclamation-triangle fa-sm"></i></h1>
        <p>{{ $t("fullXp") }}</p>
      </div>
      <category-compact
        :title="$t('jogos')"
        cat="jogos"
        :posts="posts.jogos"
        :postsSafe="postsSafe.jogos"
      />
      <category-compact
        :title="$t('musica')"
        cat="musica"
        :posts="posts.musica"
        :postsSafe="postsSafe.musica"
      />
      <category-compact
        :title="$t('videos')"
        cat="videos"
        :posts="posts.videos"
        :postsSafe="postsSafe.videos"
      />
      <category-compact
        :title="$t('ferramentas')"
        cat="ferramentas"
        :posts="posts.ferramentas"
        :postsSafe="postsSafe.ferramentas"
      />
      <category-compact
        :title="$t('etc')"
        cat="etc"
        :posts="posts.etc"
        :postsSafe="postsSafe.etc"
      />
    </container>
  </div>
</template>

<script>
import Container from "~/components/Container.vue";
import CategoryCompact from "~/components/list/CategoryCompact.vue";
import PageHeader from "~/components/PageHeader.vue";

export default {
  components: { Container, PageHeader, CategoryCompact },
  async asyncData({ $content, app }) {
    let posts = {
      jogos: [],
      musica: [],
      videos: [],
      ferramentas: [],
      etc: [],
    };
    let postsSafe = {};
    try {
      for (let cat in posts) {
        posts[cat] = await $content(`${app.i18n.locale}/${cat}`)
          .only([
            "title",
            "description",
            "slug",
            "icon",
            "tags",
            "posted",
            "nfe",
          ])
          .sortBy("posted", "desc")
          .fetch();
        postsSafe[cat] = posts[cat].filter((x) => !x.nfe);
        posts[cat] = posts[cat].slice(0, 6);
        postsSafe[cat] = postsSafe[cat].slice(0, 6);
      }
    } finally {
      return {
        posts,
        postsSafe,
      };
    }
  },
  head() {
    return {
      title: this.$t("projetos") + " · Fupi",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("projetosDesc"),
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
          content: this.$t("projetos") + " · Fupi",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("projetosDesc"),
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
          content: this.$t("projetos") + " · Fupi",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("projetosDesc"),
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

<style scoped lang="scss">
.categories {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.warning {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.4rem;
  background-color: #ea7e65;
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 0.625rem;
  box-shadow: inset 0em 0.4em rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 1.625rem;
    text-align: center;
    margin-top: -0.3rem;
    font-weight: bold;
    color: #7b1717;
  }
}

.dark .warning {
  background-color: #8c1919;

  h1 {
    color: #ea7e65;
  }
}
</style>
