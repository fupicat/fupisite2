<template>
  <footer>
    <container>
      <div class="socials">
        <a v-for="icon in social" :key="icon.name" :href="icon.url">
          <img class="social-icon reduced-motion" width="20px" height="20px" :src="`/social/${icon.name}.svg`" :alt="icon.name">
        </a>
      </div>
      <div class="toolbar">
        <i v-show="!$store.state.dark.dark" @click="darkMode(true)" class="fas fa-sun fa-lg theme-switch"></i>
        <i v-show="$store.state.dark.dark" @click="darkMode(false)" class="fas fa-moon fa-lg theme-switch"></i>
        <div class="lang-switch">
          <i class="fas fa-globe"></i>
          <select name="Idioma" @change="langChanged">
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
    darkMode(dark) {
      this.$store.commit('dark/change', dark)
    }
  },
}
</script>

<style scoped>

/* Footer */

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: var(--purple-nav);
}

.dark footer {
  background-color: var(--purple-navdark);
}

/* Socials */

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
}

.social-icon {
  transition-property: transform, opacity;
  transition-timing-function: var(--trans-out);
  transition-duration: 150ms;
  opacity: 0.5;
}

.social-icon:hover {
  opacity: 1;
  transform: scale(125%);
}

/* Toolbar */

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
}

.theme-switch {
  color: white;
  opacity: 0.5;
  cursor: pointer;
}

.theme-switch:hover {
  opacity: 1;
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.lang-switch i {
  color: white;
  opacity: 0.5;
}

.lang-switch select {
  width: min-content;
  color: white;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.5;
}

.lang-switch select:hover {
  opacity: 1;
}

</style>