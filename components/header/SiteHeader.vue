<template>
  <header class="bg-purple-nav">
    <container>
      <div class="flex flex-row justify-between h-16">
        <home-logo />
        <menu-icon :open="open" @click.native="toggleMenu()" />
        <div id="menu" class="origin-top z-40 top-16 transform motion-reduce:transition-none absolute left-0 scale-y-0 w-full flex flex-col md:flex-row md:items-center md:static md:transform-none md:w-auto md:gap-2"
            @click="toggleMenu()">
          <header-link :to="localePath('/projects')">{{ $t("projects") }}</header-link>
          <header-link :to="localePath('/blog')">{{ $t("blog") }}</header-link>
          <header-link :to="localePath('/about')">{{ $t("about") }}</header-link>
        </div>
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