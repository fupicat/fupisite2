<template>
  <div id="home-logo" @mouseover="logoHover(true)" @mouseout="logoHover(false)">
    <nuxt-link to="/" class="home-link">
      <img src="~/assets/img/LogoSmallNoButtons.png" alt="Fupi logo" class="small-logo no-buttons reduced-motion">
      <img src="~/assets/img/LogoSmall.png" alt="Fupi logo" class="small-logo buttons reduced-motion">
      <img src="~/assets/img/Logo.png" alt="Fupi logo" class="big-logo reduced-motion">
      <img :src="$t('stopPlz')" alt="para pfv ;-;" class="para reduced-motion">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      incomoda: 0,
      intervalo: null,
    }
  },
  mounted() {
    document.querySelector('#home-logo').onclick = function() {
      document.querySelector('#home-logo a').click();
    }
  },
  methods: {
    logoHover(force) {
      this.incomoda += 1;

      document.querySelector(".big-logo").classList.toggle("uncovered", force);
      document.querySelector(".buttons").classList.toggle("uncovered", force);
      document.querySelector(".no-buttons").classList.toggle("uncovered", force);

      if (!this.intervalo) {
        this.intervalo = setTimeout(this.incomodancia, 2000)
      }
    },
    incomodancia() {
      if (this.incomoda > 15) {
        this.paraPfv();
      } else {
        this.intervalo = null
        this.incomoda = 0;
      }
    },
    paraPfv() {
      if (this.intervalo) {
        const para = document.querySelector(".para");
        para.classList.toggle("uncovered");

        setTimeout(this.clearPara, 4000)
      }
    },
    clearPara() {
      console.log("ok parou");
      const para = document.querySelector(".para");
      para.classList.toggle("uncovered");
      this.intervalo = null;
      this.incomoda = 0;
    }
  }
}
</script>

<style scoped>

/* Link */

#home-logo {
  width: 10rem;
  cursor: pointer;
}

.home-link {
  display: block;
  height: 100%;
}

/* Logo */

.home-link img {
  pointer-events: none;
}

.small-logo {
  position: absolute;
  z-index: 10;
  height: 4rem;
  padding: 0.5rem 0px;

  transition-property: transform opacity mask-position;
  transition-duration: 500ms;
  transition-timing-function: var(--trans-smooth);
  --rotate: 0deg;
  transform: rotate(var(--rotate));
}

.small-logo.uncovered {
  mask-position: right;
  --rotate: -360deg;
}

.buttons {
  opacity: 1;
}

.buttons.uncovered {
  opacity: 0;
}

.no-buttons {
  mask-image: linear-gradient(90deg, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 88%);
  mask-position: left;
  mask-size: 200% 100%;
}

.no-buttons.uncovered {
  mask-position: right;
}

.big-logo {
  position: relative;
  height: 4rem;
  padding: 0.5rem 0px;
  top: 0px;

  mask-image: linear-gradient(90deg, rgba(0,0,0,0) 59%, rgba(0,0,0,1) 59%);
  mask-position: left;
  mask-size: 200% 100%;
  transition-property: mask-position transform;
  transition-duration: 500ms;
  transition-timing-function: var(--trans-smooth);
  --move: -100%;
  transform: translateX(var(--move));
}

.big-logo.uncovered {
  mask-position: right;
  --move: 0%;
}

.para {
  position: relative;
  opacity: 0;
  transition-property: all;
  transition-timing-function: var(--trans-smooth);
  transition-duration: 150ms;
  transform-origin: top left;
  transform: scale(0%);
  z-index: 50;
  height: 2.5rem;
  top: -1rem;
}

.para.uncovered {
  transform: scale(100%);
  opacity: 1;
}

</style>