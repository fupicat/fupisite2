<template>
  <nuxt-link :to="to"
    class="block text-center text-white transition-colors bg-purple-nav hover:bg-purple-hov p-4 md:p-3">
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