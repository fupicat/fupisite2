<template>
  <div :class="{ mobile: !pconly, container: true, pad: pad }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    pad: Boolean,
    pconly: Boolean,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}

.container.mobile {
  padding-left: 1rem;
  padding-right: 1rem;
}

.container.pad {
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .container,
  .container.mobile {
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 1280px;
    margin: auto;
  }
}
</style>
