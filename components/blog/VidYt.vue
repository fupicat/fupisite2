<template>
  <div class="youtube-vid">
    <iframe :src="'https://www.youtube-nocookie.com/embed/' + vidId" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    }
  },
  computed: {
    vidId() {
      if (this.url.includes("v=")) {
        return this.url.split("v=")[1].split("&")[0];
      } else {
        return this.url.replace("//", "").split("/")[1]
      }
    }
  }
}
</script>

<style scoped>
.youtube-vid {
  width: 100%;
  display: flex;
  justify-content: center;
}

.youtube-vid iframe {
  width: 100%;
  max-width: 560px;
  height: 315px;
}
</style>