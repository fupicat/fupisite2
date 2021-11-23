<template>
  <div class="itchio">
    <div v-if="!showGame" class="cover">
      <button class="fupi-btn" @click="showGame = true">{{ $t("showgame") }}</button>
    </div>
    <iframe v-if="showGame" :src="url" allowfullscreen="" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    }
  },
  data() {
    return {
      showGame: false,
    }
  }
}
</script>

<style scoped>
.itchio {
  width: 100%;
  display: flex;
  justify-content: center;
}

.itchio iframe, .itchio .cover {
  width: 100%;
  max-width: 768px;
  height: 56vw;
  max-height: 470px;
}

.itchio .cover {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0003;
}
</style>