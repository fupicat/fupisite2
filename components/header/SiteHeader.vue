<template>
  <header class="bg-purple-nav">
    <div class="flex flex-row justify-between h-16">
      <img src="~/assets/img/LogoSmall.png" alt="Fupi logo"
        class="object-scale-down p-2"
      >
      <menu-icon class="h-full w-16" @toggle="toggleMenu()" />
    </div>
    <div id="menu" class="origin-top z-50 transform absolute scale-y-0 w-screen flex flex-col">
      <header-link to="/projetos">Projetos</header-link>
      <header-link to="/blog">Blog</header-link>
      <header-link to="/sobre">Sobre</header-link>
    </div>
  </header>
</template>

<script>
import HeaderLink from "~/components/header/HeaderLink.vue";
import MenuIcon from "~/components/header/MenuIcon.vue";

export default {
  components: {
    HeaderLink,
    MenuIcon,
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