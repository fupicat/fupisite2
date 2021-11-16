<template>
  <transition-group name="list" tag="div" class="thing-list">
    <slot />
  </transition-group>
</template>

<script>
import Container from '~/components/Container.vue';

export default {
  components: {
    Container,
  },
}
</script>

<style scoped>
.thing-list {
  display: grid;
  gap: 0.625rem;
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* 1 column */
}

@media (min-width: 768px) {
  .thing-list {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 column */
  }
}

@media (min-width: 1024px) {
  .thing-list {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 column */
  }
}

/* Transitions */

.list-enter-active, .list-leave-active {
  transition: opacity 250ms;
}
.list-enter, .list-leave-to {
  opacity: 0;
}
.list-move {
  transition: transform 250ms;
}
</style>