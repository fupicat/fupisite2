<template>
  <div>
    <page-header :title="$t('projetos')" :description="$t('projetosDesc')" />
    <container pad class="categories">
      <category-compact
        title="Jogos"
        cat="jogos"
        :posts="posts.jogos"
      />
      <category-compact
        title="Música"
        cat="musica"
        :posts="posts.musica"
      />
      <category-compact
        title="Vídeos"
        cat="videos"
        :posts="posts.videos"
      />
      <category-compact
        title="Ferramentas"
        cat="ferramentas"
        :posts="posts.ferramentas"
      />
      <category-compact
        title="Etc."
        cat="etc"
        :posts="posts.etc"
      />
    </container>
  </div>
</template>

<script>
import Container from '~/components/Container.vue'
import CategoryCompact from '~/components/list/CategoryCompact.vue';
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: { Container, PageHeader, CategoryCompact, },
  async asyncData({ $content, store, app }) {
    let posts = {
      jogos: [],
      musica: [],
      videos: [],
      ferramentas: [],
      etc: [],
    };
    try {
      for (let cat in posts) {
        posts[cat] = await $content(`${app.i18n.locale}/${cat}`)
          .only(['title', 'description', 'slug', 'icon', 'tags', 'posted', 'nfe'])
          .sortBy('posted', 'desc')
          .limit(6)
          .fetch();
      }
      console.log(posts);
    } finally {
      return {
        posts
      }
    }
  },
}
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
</style>