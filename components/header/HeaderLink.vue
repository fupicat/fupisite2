<template>
  <nuxt-link :to="to"
    class="block text-center text-white transition-colors bg-purple-nav dark:bg-purple-navdark hover:bg-purple-hov dark:hover:bg-purple-hovdark p-4 md:p-3">
  <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: ["to"],
}
</script>

<style>

</style>