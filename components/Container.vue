<template>
  <div :class="{ 'px-4': !pconly, 'md:px-pc w-full': true, 'py-2': pad }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    pad: Boolean,
    pconly: Boolean,
  }
}
</script>

<style>

</style>