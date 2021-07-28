<template>
  <div class="flex flex-row py-5 gap-5 bg-purple-hov w-full justify-center items-center">
    <img :src="icon ? icon : '/img/Eu.png'" alt="ícone da postagem" class="transform transition-transform duration-700 motion-reduce:transition-none sticker h-16 hover:rotate-360">
    <div class="text-white">
      <p class="font-bold text-xl text-center">{{ title }}</p>
      <p class="text-sm text-center">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'icon']
}
</script>

<style>

</style>