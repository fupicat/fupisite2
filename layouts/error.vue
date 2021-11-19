<template>
  <container>
    <div class="error">
      <img src="/img/404.png" alt="404">
      <h1 v-if="error.statusCode === 404">{{ $t("404") }}</h1>
      <h1 v-else>{{ $t("500") }}</h1>
      <p>{{ $t("errorDesc") }}<NuxtLink to="/sobre#contato">{{ $t("errorContact") }}</NuxtLink></p>
    </div>
  </container>
</template>

<script>
import Container from "~/components/Container.vue";

export default {
  components: { Container, },
  props: ["error"],
  head() {
    return {
      title: this.$t("error") + " · Fupi",
      meta: [
        { hid: 'description', name: 'description', content: this.$t("fupiDesc"), },
        { hid: 'keywords', name: 'keywords', content: this.$t("fupiTags")},
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.$t("error") + " · Fupi" },
        { hid: 'og:description', property: 'og:description', content: this.$t("fupiDesc") },
        // Twitter
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t("error") + " · Fupi" },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t("fupiDesc") }
      ]
    }
  },
}
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error h1 {
  font-weight: bolder;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.error p {
  margin-bottom: 3rem;
  text-align: center;
}

.error img {
  height: 300px;
  object-fit: contain;
}
</style>