<template>
  <header class="bg-purple-nav">
    <div class="flex flex-row justify-between h-16">
      <home-logo />
      <menu-icon class="h-full w-16" @toggle="toggleMenu()" />
    </div>
    <div id="menu" class="origin-top z-40 transform motion-reduce:transition-none absolute scale-y-0 w-full flex flex-col">
      <header-link to="/projetos">Projetos</header-link>
      <header-link to="/blog">Blog</header-link>
      <header-link to="/sobre">Sobre</header-link>
    </div>
  </header>
</template>

<script>
import HeaderLink from "~/components/header/HeaderLink.vue";
import MenuIcon from "~/components/header/MenuIcon.vue";
import HomeLogo from '~/components/header/HomeLogo.vue';

export default {
  components: {
    HeaderLink,
    MenuIcon,
    HomeLogo,
  },
  methods: {
    toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.add("transition-transform");
      menu.classList.toggle("scale-y-0");
      menu.classList.toggle("scale-y-100");
    }
  }
}
</script>

<style>

</style>