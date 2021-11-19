<template>
  <nuxt-link :to="`/${url}/?q=${encodeURIComponent(tag)}`" class="tag reduced-motion">{{ tag }}</nuxt-link>
</template>

<script>
export default {
  props: ['tag', 'url']
}
</script>

<style scoped>
.tag {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.4rem;
  transition-property: background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--trans-smooth);
}

.tag:hover {
  color: white;
  background-color: var(--theme-hov);
}
</style>