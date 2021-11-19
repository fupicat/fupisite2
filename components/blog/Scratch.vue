<template>
  <div class="scratch">
    <iframe :src="'https://turbowarp.org/' + projId + '/embed?addons=remove-curved-stage-border,pause'" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "https://scratch.mit.edu/projects/104",
    }
  },
  computed: {
    projId() {
      return this.url.replace("https://scratch.mit.edu/projects/", "").split("/")[0]
    }
  }
}
</script>

<style scoped>
.scratch {
  width: 100%;
  display: flex;
  justify-content: center;
}

.scratch iframe {
  width: 100%;
  max-width: 499px;
  height: 80vw;
  max-height: 416px;
}
</style>