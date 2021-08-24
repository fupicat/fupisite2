<template>
  <nuxt-link :to="'/blog/?q=' + encodeURIComponent(tag)" class="tag reduced-motion">{{ tag }}</nuxt-link>
</template>

<script>
export default {
  props: ['tag']
}
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  transition-property: background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--trans-smooth);
}

.tag:hover {
  background-color: var(--purple-hov);
}

.dark .tag:hover {
  background-color: var(--purple-hovdark);
}
</style>