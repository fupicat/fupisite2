<template>
  <div id="app">
    <site-header />
    <nuxt class="bg-purple-bg dark:bg-purple-bgdark" />
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
}
</script>

<style>

</style>