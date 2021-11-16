<template>
  <header>
    <container>
      <div class="main">
        <home-logo />
        <menu-icon :open="open" @click.native="toggleMenu()" />
        <div id="menu" class="reduced-motion"
            @click="toggleMenu()">
          <header-link :to="localePath('/projetos')">{{ $t("projetos") }}</header-link>
          <header-link :to="localePath('/blog')">{{ $t("blog") }}</header-link>
          <header-link :to="localePath('/sobre')">{{ $t("sobre") }}</header-link>
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
      menu.classList.toggle("open");
    }
  }
}
</script>

<style scoped>
header {
  background-color: var(--purple-nav);
}

.dark header {
  background-color: var(--purple-navdark);
}

header .main {
  display: flex;
  justify-content: space-between;
  height: 4rem;
}

header #menu {
  transform-origin: top;
  z-index: 40;
  top: 4rem;
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0em 1em 1em rgba(0, 0, 0, 0.3);

  transform: scaleY(0%);
  transition-property: transform;
  transition-timing-function: var(--trans-smooth);
  transition-duration: 150ms;
}

header #menu.open {
  transform: scaleY(100%);
}

@media (min-width: 768px) {
  header #menu {
    flex-direction: row;
    align-items: center;
    position: static;
    transform: none;
    width: auto;
    gap: 0.5rem;
    box-shadow: none;
  }
}
</style>