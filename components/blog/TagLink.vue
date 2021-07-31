<template>
  <nuxt-link :to="'/blog/?tags=' + tag" class="inline-block px-2 py-1 transition-colors hover:bg-purple-nav motion-reduce:transition-none">{{ tag }}</nuxt-link>
</template>

<script>
export default {
  props: ['tag']
}
</script>

<style>

</style>