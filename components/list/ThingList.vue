<template>
  <container pad>
    <transition-group name="list" tag="div" class="grid gap-2.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <slot />
    </transition-group>
  </container>
</template>

<script>
import Container from '~/components/Container.vue';

export default {
  components: {
    Container,
  },
}
</script>

<style>
.list-enter-active, .list-leave-active {
  transition: opacity 250ms;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.list-move {
  transition: transform 250ms;
}
</style>