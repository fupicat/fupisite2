<template>
  <nuxt-link :to="to"
    class="header-link">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: ["to"],
}
</script>

<style>
.header-link {
  display: block;
  text-align: center;
  color: white;
  transition-property: background-color;
  transition-timing-function: var(--trans-smooth);
  transition-duration: 150ms;
  background-color: var(--purple-nav);
  padding: 1rem;
}

.header-link:hover {
  background-color: var(--purple-hov);
}

.dark .header-link {
  background-color: var(--purple-navdark);
}

.dark .header-link:hover {
  background-color: var(--purple-hovdark);
}

@media (min-width: 768px) {
  .header-link {
    border-radius: 0.4rem;
    padding: 0.75rem;
  }
}
</style>