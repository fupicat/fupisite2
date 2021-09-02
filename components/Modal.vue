<template>
  <transition name="fade">
    <div v-if="show" class="modal">
      <div class="background" @click="$emit('close')"></div>
      <div class="window">
        <div class="title">
          <h1>{{ title }}</h1>
          <div class="close" @click="$emit('close')">×</div>
        </div>
        <div class="content">
          <p class="description">{{ description }}</p>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    show: Boolean,
  },
  watch: {
    show(show) {
      document.body.classList.toggle("block-scroll", show);
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}

.modal {
  transform-origin: center;
  z-index: 50;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}

.modal .background {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal .window {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: var(--purple-bg);
  border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-height: 90%;
}

@media (min-width: 768px) {
  .modal .window {
    width: auto;
    max-width: 90%;
  }
}

.window .title {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--purple-nav);
  border-radius: 0.25rem 0.25rem 0px 0px;
  color: white;
  width: 100%;
}

.window .title h1 {
  width: 100%;
  padding: 0px 1rem;
}

.window .title .close {
  padding: 1rem 1rem 1.2rem 1rem;
  font-size: 1.5rem;
  line-height: 0px;
  cursor: pointer;
}

.window .title .close:hover {
  background: var(--purple-hov);
  border-radius: 0px 0.25rem 0px 0px;
}

.window .content {
  overflow-y: auto;
  color: black;
}

.window .description {
  text-align: center;
  padding: 1rem;
  overflow-wrap: anywhere;
}
</style>