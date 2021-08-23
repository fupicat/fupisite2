<template>
  <div>
    <div class="py-5 px-7 bg-purple-hov dark:bg-purple-hovdark w-full">
      <div class="flex flex-row gap-5 justify-center items-center">
        <img :src="icon ? icon : '/img/Eu.png'" alt="ícone da postagem" class="transform transition-transform duration-200 motion-reduce:transition-none sticker h-16 hover:rotate-6 hover:scale-110">
        <div class="text-white">
          <p class="font-bold text-xl text-center">{{ title }}</p>
          <p class="text-sm text-center">{{ description }}</p>
        </div>
      </div>
      <div v-if="posted || edited" class="pt-2 flex flex-row text-center justify-center items-center text-white opacity-50 gap-5">
        <p>Postado:<br>{{ formatDate(posted) }}</p>
        <p v-if="edited && (posted != edited)">Editado:<br>{{ formatDate(edited) }}</p>
      </div>
    </div>
    <div v-if="tags" class="py-2 bg-purple-nav dark:bg-purple-navdark text-white flex flex-row justify-center gap-1">
      <tag-link v-for="tag in tags.split(' ')" :key="tag" :tag="tag" />
    </div>
  </div>
</template>

<script>
import TagLink from "~/components/TagLink.vue";

export default {
  components: {
    TagLink,
  },
  props: ['title', 'description', 'icon', 'posted', 'edited', 'tags'],
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt', options)
    }
  }
}
</script>