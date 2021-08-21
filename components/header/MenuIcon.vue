<template>
  <div class="flex flex-col justify-between p-5 cursor-pointer">
    <div id="bun1" class="rounded-full transform transition-transform motion-reduce:transition-none w-full h-1/5 bg-white"></div>
    <div id="bun2" class="rounded-full transform transition-transform motion-reduce:transition-none w-full h-1/5 bg-white"></div>
    <div id="bun3" class="rounded-full transform transition-transform motion-reduce:transition-none w-full h-1/5 bg-white"></div>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
  watch: {
    open(open) {
      const bun1 = document.getElementById("bun1");
      const bun2 = document.getElementById("bun2");
      const bun3 = document.getElementById("bun3");

      bun1.classList.toggle("translate-y-200", open);
      bun1.classList.toggle("rotate-45", open);
      bun2.classList.toggle("scale-x-0", open);
      bun3.classList.toggle("-translate-y-200", open);
      bun3.classList.toggle("-rotate-45", open);
    }
  }
}
</script>

<style>

</style>