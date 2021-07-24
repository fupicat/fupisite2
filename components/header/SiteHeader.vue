<template>
  <header class="bg-purple-nav">
    <div class="flex flex-row justify-between">
      <img src="~/assets/img/LogoSmall.png" alt="Fupi logo"
        class="object-scale-down h-24 p-2"
      >
      <p @click="showMenu = !showMenu">menu</p>
    </div>
    <div v-show="showMenu" class="flex flex-col">
      <header-link to="/projetos">Projetos</header-link>
      <header-link to="/blog">Blog</header-link>
      <header-link to="/sobre">Sobre</header-link>
    </div>
  </header>
</template>

<script>
import HeaderLink from "~/components/header/HeaderLink.vue"

export default {
  components: {
    HeaderLink
  },
  data() {
    return {
      showMenu: false,
    }
  }
}
</script>

<style>

</style>