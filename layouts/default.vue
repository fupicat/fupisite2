<template>
  <div id="app">
    <site-header />
    <nuxt />
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

</style>