<template>
  <footer class="flex flex-col items-center p-4 bg-purple-nav">
    <div class="flex flex-row justify-center items-center mb-2 gap-2">
      <a v-for="icon in social" :key="icon.name" :href="icon.url">
        <img class="transform transition-transform ease-out opacity-50 hover:opacity-100 hover:scale-125 motion-reduce:transition-none" width="20px" height="20px" :src="`/social/${icon.name}.svg`" :alt="icon.name">
      </a>
    </div>
    <select name="Idioma" @change="langChanged" class="w-min text-white cursor-pointer opacity-50 hover:opacity-100">
      <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code" :selected="locale.code == $i18n.locale ? true : null">{{ locale.name }}</option>
    </select>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        { name: "Scratch", url: "https://scratch.mit.edu/users/Fupicat" },
        { name: "YouTube", url: "https://youtube.com/c/fupii" },
        { name: "Twitter", url: "https://twitter.com/fupibr" },
        { name: "Reddit", url: "https://www.reddit.com/user/fup437" },
        { name: "GitHub", url: "https://github.com/Fupicat" },
        { name: "Newgrounds", url: "https://fupicat.newgrounds.com/" },
        { name: "Gamejolt", url: "https://gamejolt.com/@Fupi" },
        { name: "Itch.io", url: "https://fupi.itch.io/" },
        { name: "OpenGameArt", url: "https://opengameart.org/users/fupi" },
        { name: "Freesound", url: "https://freesound.org/people/Fupicat/" },
      ]
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales;
    }
  },
  methods: {
    langChanged(event) {
      this.$i18n.setLocale(event.target.value);
    }
  }
}
</script>

<style>

</style>