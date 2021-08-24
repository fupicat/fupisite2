<template>
  <div class="hamburger">
    <div id="bun1" class="reduced-motion"></div>
    <div id="bun2" class="reduced-motion"></div>
    <div id="bun3" class="reduced-motion"></div>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
  watch: {
    open(open) {
      const hamburger = document.querySelector(".hamburger");

      hamburger.classList.toggle("open", open);
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1.5rem;
  justify-content: space-between;
  padding: 1.25rem 0px;
  margin: 0px 0.25rem;
  cursor: pointer;
}

.hamburger div {
  border-radius: 99px;
  transition-property: transform;
  transition-timing-function: var(--trans-smooth);
  transition-duration: 150ms;
  width: 100%;
  height: 20%;
  background-color: white;
}

.open #bun1 {
  transform: translateY(200%) rotate(45deg);
}

.open #bun2 {
  transform: scaleX(0%);
}

.open #bun3 {
  transform: translateY(-200%) rotate(-45deg);
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}
</style>