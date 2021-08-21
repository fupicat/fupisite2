<template>
  <header class="bg-purple-nav">
    <container pconly>
      <div class="flex flex-row justify-between h-16">
        <home-logo />
        <menu-icon class="h-full w-16" :open="open" @click.native="toggleMenu()" />
      </div>
      <div id="menu" class="origin-top z-40 transform motion-reduce:transition-none absolute left-0 scale-y-0 w-full flex flex-col"
      @click="toggleMenu()">
        <header-link to="/projetos">Projetos</header-link>
        <header-link to="/blog">Blog</header-link>
        <header-link to="/sobre">Sobre</header-link>
      </div>
    </container>
  </header>
</template>

<script>
import HeaderLink from "~/components/header/HeaderLink.vue";
import MenuIcon from "~/components/header/MenuIcon.vue";
import HomeLogo from '~/components/header/HomeLogo.vue';
import Container from '~/components/Container.vue';

export default {
  components: {
    HeaderLink,
    MenuIcon,
    HomeLogo,
    Container,
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
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