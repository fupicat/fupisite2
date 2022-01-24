<template>
  <NuxtLink :to="localePath(`/${path}/${slug}`)" class="thing fupi-btn">
    <div class="main">
      <img :src="icon ? icon : '/img/icons/Jigsaw.png'" alt="ícone da postagem">
      <div>
        <p class="title">{{ title }}</p>
        <p class="description">{{ description }}</p>
      </div>
    </div>
    <div v-if="showdate" class="date">
      <p>{{ formatDate(posted) }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    path: String,
    slug: String,
    title: String,
    description: String,
    icon: String,
    posted: Number,
    showdate: Boolean,
    color: String,
    colorhov: String,
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(this.$i18n.locale, options)
    }
  }
}
</script>

<style scoped>
.thing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.25rem 1.75rem;
}

.thing .main {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
}

.thing .main div {
  width: 100%;
}

.thing .main img {
  height: 6rem;
  min-width: 6rem;
  max-width: 6rem;
  margin: -1rem;
  object-fit: contain;
}

.title {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
}

.description {
  font-style: italic;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
}

.date {
  text-align: center;
  opacity: 0.5;
}
</style>