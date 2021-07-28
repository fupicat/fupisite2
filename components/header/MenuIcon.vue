<template>
  <div class="flex flex-col justify-between p-5 cursor-pointer" @click="toggle()">
    <div id="bun1" class="rounded-full transform transition-transform motion-reduce:transition-none w-full h-1/5 bg-white"></div>
    <div id="bun2" class="rounded-full transform transition-transform motion-reduce:transition-none w-full h-1/5 bg-white"></div>
    <div id="bun3" class="rounded-full transform transition-transform motion-reduce:transition-none w-full h-1/5 bg-white"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      const bun1 = document.getElementById("bun1");
      const bun2 = document.getElementById("bun2");
      const bun3 = document.getElementById("bun3");

      this.$emit("toggle");

      bun1.classList.toggle("translate-y-200");
      bun1.classList.toggle("rotate-45");
      bun2.classList.toggle("scale-x-0");
      bun3.classList.toggle("-translate-y-200");
      bun3.classList.toggle("-rotate-45");
    }
  }
}
</script>

<style>

</style>