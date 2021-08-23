<template>
  <nuxt-link :to="'/blog/?q=' + encodeURIComponent(tag)" class="inline-block px-2 py-1 transition-colors hover:bg-purple-hov dark:hover:bg-purple-hovdark motion-reduce:transition-none">{{ tag }}</nuxt-link>
</template>

<script>
export default {
  props: ['tag']
}
</script>

<style>

</style>