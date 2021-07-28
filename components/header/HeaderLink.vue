<template>
  <nuxt-link :to="to"
    class="block text-center text-white bg-purple-nav hover:bg-purple-hov p-4">
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