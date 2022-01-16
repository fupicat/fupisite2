<template>
  <div :class="'category-compact ' + cat">
    <div class="header">
      <div class="title"><img :src="`/img/${cat}.png`" :alt="cat" /><h1>{{ title }}</h1></div>
      <nuxt-link class="fupi-btn" :to="localePath('/' + cat)">{{ $t("mais") }}</nuxt-link>
    </div>
    <thing-list>
      <thing-item v-for="post of filteredPosts" :key="post.slug"
        :path="cat"
        :slug="post.slug"
        :title="post.title"
        :description="post.description"
        :icon="post.icon"
        :posted="post.posted"
        showdate
      />
    </thing-list>
  </div>
</template>

<script>
import ThingList from '~/components/list/ThingList.vue'
import ThingItem from '~/components/list/ThingItem.vue'

export default {
  components: { ThingList, ThingItem, },
  props: {
    cat: String,
    title: String,
    posts: Array,
    postsSafe: Array,
  },
  computed: {
    filteredPosts() {
      if (!this.$store.state.nfe.nfe) {
        return this.postsSafe;
      } else {
        return this.posts;
      }
    }
  },
}
</script>

<style>
.category-compact .header {
  display: flex;
  margin-bottom: 0.3rem;
  justify-content: space-between;
}

.category-compact .header .title {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.category-compact .header .title h1 {
  font-size: 1.625rem;
  text-align: center;
  font-weight: bold;
  color: var(--theme-title);
}

.category-compact .header .title img {
  height: 2rem;
}

.category-compact .header a {
  padding-bottom: 0.6rem;
  font-style: italic;
  line-height: 100%;
  display: flex;
  align-items: center;
}

.category-compact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.625rem 1rem;
  border-radius: 0.625rem;
  box-shadow: inset 0em 0.4em rgba(0, 0, 0, 0.15);
  background-color: var(--theme-panel);
}
</style>