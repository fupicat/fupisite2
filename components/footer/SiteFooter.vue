<template>
  <footer class="flex flex-col items-center p-4 bg-purple-nav dark:bg-purple-navdark">
    <container>
      <div class="flex flex-row justify-center items-center mb-2 gap-2">
        <a v-for="icon in social" :key="icon.name" :href="icon.url">
          <img class="transform transition-transform ease-out opacity-50 hover:opacity-100 hover:scale-125 motion-reduce:transition-none" width="20px" height="20px" :src="`/social/${icon.name}.svg`" :alt="icon.name">
        </a>
      </div>
      <div class="flex flex-row justify-between items-center w-full gap-2">
        <i v-show="!dark" @click="darkMode(true)" class="fas fa-sun fa-lg text-white opacity-50 hover:opacity-100 cursor-pointer"></i>
        <i v-show="dark" @click="darkMode(false)" class="fas fa-moon fa-lg text-white opacity-50 hover:opacity-100 cursor-pointer"></i>
        <div class="flex flex-row items-center gap-1">
          <i class="fas fa-globe text-white opacity-50"></i>
          <select name="Idioma" @change="langChanged" class="w-min text-white bg-transparent cursor-pointer opacity-50 hover:opacity-100">
            <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code" :selected="locale.code == $i18n.locale ? true : null">{{ locale.name }}</option>
          </select>
        </div>
      </div>
    </container>
  </footer>
</template>

<script>
import Container from '../Container.vue';
export default {
  components: { Container },
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
      ],
      dark: false,
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
    },
    darkMode(dark = localStorage.dark) {
      if (dark === undefined) {
        dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      if (!!dark == true) {
        this.dark = true;
        localStorage.dark = true;
        document.documentElement.classList.add('dark')
      } else {
        this.dark = false;
        localStorage.dark = false;
        document.documentElement.classList.remove('dark')
      }
    }
  },
  mounted() {
    this.darkMode();
  },
}
</script>

<style>

</style>