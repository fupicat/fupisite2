<template>
  <div id="home-logo" class="px-2 w-40 cursor-pointer" @mouseover="logoHover(true)" @mouseout="logoHover(false)">
    <nuxt-link to="/">
      <img src="~/assets/img/LogoSmallNoButtons.png" alt="Fupi logo" class="pointer-events-none small-logo no-buttons absolute z-10 h-16 py-2 motion-reduce:transition-none">
      <img src="~/assets/img/LogoSmall.png" alt="Fupi logo" class="pointer-events-none small-logo buttons absolute z-10 h-16 py-2 motion-reduce:transition-none">
      <img src="~/assets/img/Logo.png" alt="Fupi logo" class="pointer-events-none big-logo absolute h-16 py-2 left-2 top-0 motion-reduce:transition-none">
      <img src="~/assets/img/ParaPfv.png" alt="para pfv ;-;" class="pointer-events-none para absolute opacity-0 transition-all transform origin-top-left scale-0 z-50 h-10 top-12 left-4 motion-reduce:transition-none">
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
      console.log(this.incomoda);

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
        para.classList.toggle("scale-0");
        para.classList.toggle("scale-100");
        para.classList.toggle("opacity-0");
        para.classList.toggle("opacoty-100");

        setTimeout(this.clearPara, 4000)
      }
    },
    clearPara() {
      console.log("ok parou");
      const para = document.querySelector(".para");
      para.classList.toggle("scale-0");
      para.classList.toggle("scale-100");
      para.classList.toggle("opacity-0");
      para.classList.toggle("opacoty-100");
      this.intervalo = null;
      this.incomoda = 0;
    }
  }
}
</script>

<style scoped>
.small-logo {
  transition-property: transform opacity mask-position;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
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
  mask-image: linear-gradient(90deg, rgba(0,0,0,0) 59%, rgba(0,0,0,1) 59%);
  mask-position: left;
  mask-size: 200% 100%;
  transition-property: mask-position transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --move: -100%;
  transform: translateX(var(--move));
}

.big-logo.uncovered {
  mask-position: right;
  --move: 0%;
}
</style>