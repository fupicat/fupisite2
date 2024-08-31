<template>
  <footer>
    <container>
      <div class="socials">
        <a v-for="icon in social" :key="icon.name" :href="icon.url">
          <img
            class="social-icon reduced-motion"
            width="20px"
            height="20px"
            :src="`/social/${icon.name}.svg`"
            :alt="icon.name"
          />
        </a>
      </div>
      <div class="toolbar">
        <div class="theme-switch tool" @click="darkMode()">
          <!-- Mostra o ícone certo para o tema -->
          <i
            :class="{
              'fas fa-lg': true,
              'fa-sun': !$store.state.dark.dark,
              'fa-moon': $store.state.dark.dark,
            }"
          ></i>
          <p>{{ $t("theme") }}</p>
        </div>

        <div class="nfe tool" @click="nfeShow = true">
          <i class="fas fa-lg fa-child"></i>
          <p>{{ $t("nfe") }}</p>
        </div>

        <div class="lang-switch tool">
          <i class="fas fa-globe" @click="openLang()"></i>
          <select name="Idioma" @change="langChanged">
            <option
              v-for="locale in availableLocales"
              :key="locale.code"
              :value="locale.code"
              :selected="locale.code == $i18n.locale ? true : null"
            >
              {{ locale.name }}
            </option>
          </select>
        </div>
      </div>
    </container>

    <modal
      :show="nfeShow"
      @close="nfeShow = false"
      :title="$t('nfe')"
      :description="$t('nfeDesc')"
    >
      <div class="nfe-switch" @click="nfe()">
        <i
          :class="{
            'fas fa-lg': true,
            'fa-toggle-on': !$store.state.nfe.nfe,
            'fa-toggle-off': $store.state.nfe.nfe,
          }"
        ></i>
        <p>{{ $t($store.state.nfe.nfe ? "nfeOff" : "nfeOn") }}</p>
      </div>
    </modal>
  </footer>
</template>

<script>
import Container from "../Container.vue";
import Modal from "../Modal.vue";

export default {
  components: { Container, Modal },
  data() {
    return {
      social: [
        { name: "Scratch", url: "https://scratch.mit.edu/users/Fupicat" },
        { name: "YouTube", url: "https://youtube.com/c/fupii" },
        { name: "Bluesky", url: "https://bsky.app/profile/fupi.cat" },
        { name: "Reddit", url: "https://www.reddit.com/user/fup437" },
        { name: "GitHub", url: "https://github.com/Fupicat" },
        { name: "Newgrounds", url: "https://fupicat.newgrounds.com/" },
        { name: "Gamejolt", url: "https://gamejolt.com/@Fupi" },
        { name: "Itch.io", url: "https://fupi.itch.io/" },
        { name: "OpenGameArt", url: "https://opengameart.org/users/fupi" },
        { name: "Freesound", url: "https://freesound.org/people/Fupicat/" },
        { name: "Bandcamp", url: "https://fupicat.bandcamp.com/" },
      ],
      dark: false,
      nfeShow: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  methods: {
    openLang() {
      document.querySelector(".lang-switch select").click();
    },
    langChanged(event) {
      this.$i18n.setLocale(event.target.value);
    },
    darkMode() {
      this.$store.commit("dark/change", !this.$store.state.dark.dark);
    },
    nfe() {
      this.$store.commit("nfe/change", !this.$store.state.nfe.nfe);
    },
  },
};
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  width: 100%;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .toolbar {
    flex-direction: row;
  }
}

.theme-switch {
  color: white;
  opacity: 0.5;
  cursor: pointer;
}

.theme-switch:hover {
  opacity: 1;
}

.tool {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  opacity: 0.5;
}

.tool:hover {
  opacity: 1;
}

.lang-switch select {
  width: min-content;
  background-color: transparent;
  cursor: pointer;
}

.nfe {
  cursor: pointer;
}

.nfe-switch {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  padding-bottom: 1rem;
}
</style>
