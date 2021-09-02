<template>
  <div>
    <div class="thing-header">
      <div class="main">
        <img :src="icon ? icon : '/img/Eu.png'" alt="ícone da postagem" class="reduced-motion sticker">
        <div>
          <p class="title">{{ title }}</p>
          <p class="description">{{ description }}</p>
        </div>
      </div>
      <div v-if="posted || edited" class="date">
        <p>Postado:<br>{{ formatDate(posted) }}</p>
        <p v-if="edited && (posted != edited)">Editado:<br>{{ formatDate(edited) }}</p>
      </div>
    </div>
    <div v-if="tags" class="tags">
      <tag-link :url="url" v-for="tag in tags.split(' ')" :key="tag" :tag="tag" />
    </div>
  </div>
</template>

<script>
import TagLink from "~/components/TagLink.vue";

export default {
  components: {
    TagLink,
  },
  props: ['url', 'title', 'description', 'icon', 'posted', 'edited', 'tags'],
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt', options)
    }
  }
}
</script>

<style scoped>
.thing-header {
  padding: 1.25rem 1.75rem;
  background-color: var(--theme-main);
  width: 100%;
  color: white;
}

.thing-header .main {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
}

.thing-header .main img {
  transition-property: transform;
  transition-timing-function: var(--trans-smooth);
  transition-duration: 200ms;

  height: 4rem;
}

.thing-header .main img:hover {
  transform: rotate(6deg) scale(110%);
}

.title {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
}

.description {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.date {
  padding-top: 0.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  gap: 1.25rem;
}

.tags {
  padding: 0.5rem 0px;
  background-color: var(--theme-nav);
  color: white;
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}
</style>