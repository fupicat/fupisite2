<template>
  <div class="pt-5 px-7 bg-purple-hov w-full">
    <div class="flex flex-row gap-5 justify-center items-center">
      <img :src="icon ? icon : '/img/Eu.png'" alt="ícone da postagem" class="transform transition-transform duration-700 motion-reduce:transition-none sticker h-16 hover:rotate-360">
      <div class="text-white">
        <p class="font-bold text-xl text-center">{{ title }}</p>
        <p class="text-sm text-center">{{ description }}</p>
      </div>
    </div>
    <div class="py-2 flex flex-row text-center justify-center items-center text-white opacity-50 gap-5">
      <p>Postado:<br>{{ formatDate(created) }}</p>
      <p v-if="updated && (created != updated)">Editado:<br>{{ formatDate(updated) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'icon', 'created', 'updated'],
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt', options)
    }
  }
}
</script>

<style>

</style>