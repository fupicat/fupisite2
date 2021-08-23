<template>
  <div id="app">
    <site-header />
    <nuxt class="bg-purple-bg" />
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "~/components/header/SiteHeader.vue"
import SiteFooter from "~/components/footer/SiteFooter.vue"

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
  data() {
    return {
      dark: false,
    }
  },
  mounted() {
    this.darkMode();
  },
  methods: {
    darkMode(dark = localStorage.dark) {
      if (dark === undefined) {
        dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      if (dark == "true") {
        this.dark = true;
        localStorage.dark = true;
      } else {
        this.dark = false;
        localStorage.dark = false;
      }
    }
  }
}
</script>

<style>
* {
  font-family: 'Atkinson Hyperlegible', sans-serif;
}

.sticker {
  -webkit-filter: drop-shadow(0px 1px 0.2px white) drop-shadow(1px 0px 0.2px white) drop-shadow(0px -1px 0.2px white) drop-shadow(-1px 0px 0.2px white) drop-shadow(0px 1px 0.2px white) drop-shadow(1px 0px 0.2px white) drop-shadow(0px -1px 0.2px white) drop-shadow(-1px 0px 0.2px white) drop-shadow(0px 0px 4px black);
  filter: drop-shadow(0px 1px 0.2px white) drop-shadow(1px 0px 0.2px white) drop-shadow(0px -1px 0.2px white) drop-shadow(-1px 0px 0.2px white) drop-shadow(0px 1px 0.2px white) drop-shadow(1px 0px 0.2px white) drop-shadow(0px -1px 0.2px white) drop-shadow(-1px 0px 0.2px white) drop-shadow(0px 0px 4px black);
}
</style>