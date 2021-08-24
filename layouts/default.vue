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
  computed: {
    dark () {
      return this.$store.state.dark.dark;
    }
  },
  watch: {
    dark(dark) {
      if (!!dark == true) {
        localStorage.dark = true;
        document.documentElement.classList.add('dark')
      } else {
        localStorage.dark = false;
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>

<style>

</style>