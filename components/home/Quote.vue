<template>
  <div :aria-hidden="!selected" :class="`quote${selected ? ' active' : ''}`">
    <div class="text"><p class="lq">&ldquo;</p><p class="main" v-html="text"></p><p class="rq">&rdquo;</p></div>
    <p @click.stop class="author">~ <span v-html="author"></span></p>
  </div>
</template>

<script>
export default {
  props: ["text", "author", "selected"]
}
</script>

<style>
.quote {
  position: absolute;
  width: fit-content;
  animation-name: fadeOut;
  animation-duration: 0.6s;
  transform: translateY(100%);
}

.quote.active {
  animation-name: fadeIn;
  transform: translateY(0%);
}

@keyframes fadeIn {
  from {
    transform: translateY(100%);
    opacity: 0;
    display: none;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
    display: block;
  }
}

@keyframes fadeOut {
  from {
    transform: translateY(0%);
    opacity: 1;
    display: block;
  }

  to {
    transform: translateY(-100%);
    opacity: 0;
    display: none;
  }
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text p {
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 100%;
}

.text .main {
  font-size: 0.875rem;
  font-weight: normal;
  font-style: italic;
  margin: 0 0.6rem 0 0.6rem;
  text-align: center;
}

.text .lq {
  margin-bottom: -1.5rem;
}

.author {
  font-size: 0.875rem;
  text-align: right;
  margin-right: 1rem;
}
</style>