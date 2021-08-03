<template>
  <NuxtLink :to="`/blog/${slug}`" :class="`transition-colors flex flex-col justify-center gap-2 py-5 px-7 bg-${color} hover:bg-${colorhov}`">
    <div class="flex flex-row gap-5 justify-center items-center">
      <img :src="icon ? icon : '/img/Eu.png'" alt="ícone da postagem" class="sticker h-16">
      <div class="text-white">
        <p class="font-bold text-xl text-center">{{ title }}</p>
        <p class="text-sm text-center">{{ description }}</p>
      </div>
    </div>
    <div v-if="showdate" class="text-center text-white opacity-50">
      <p>{{ formatDate(posted) }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
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
      return new Date(date).toLocaleDateString('pt', options)
    }
  }
}
</script>