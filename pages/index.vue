<template>
  <container>
    <div class="main">
      <div class="featured" v-swiper="swiperOptions">
        <div class="swiper-wrapper">
          <NuxtLink :to="localePath(`/${proj.category}/${proj.slug}`)" :class="`project swiper-slide ${proj.category}`" v-for="proj in featured" :key="proj.post.title">
            <div :style="`background-image: url('/img/covers/${proj.cover}')`" class="cover"></div>
            <div class="btn">
              <img :src="proj.post.icon" alt="ícone da postagem">
              <div class="info">
                <p class="title">{{ proj.post.title }}</p>
                <p class="description">{{ proj.post.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <img src="/img/Left.png" class="swiper-button-prev" slot="button-prev">
        <img src="/img/Right.png" class="swiper-button-next" slot="button-next">
      </div>
      <div class="intro">
        <div class="quotes" @click="nextQuote()">

          <div @animationend="animationEnd()" :class="`quote${animating ? ' transition' : ''}`">
            <div class="text"><p class="lq">&ldquo;</p><p class="main">{{ quotes[currQ].text }}</p><p class="rq">&rdquo;</p></div>
            <p @click.stop class="author">~ <a v-if="quotes[currQ].link" :href="quotes[currQ].link">{{ quotes[currQ].author }}</a><span v-else>{{ quotes[currQ].author }}</span></p>
          </div>

          <div :class="`quote${animating ? ' transition' : ''}`">
            <div class="text"><p class="lq">&ldquo;</p><p class="main">{{ quotes[nextQ].text }}</p><p class="rq">&rdquo;</p></div>
            <p @click.stop class="author">~ <a v-if="quotes[nextQ].link" tabindex="-1" :href="quotes[nextQ].link">{{ quotes[nextQ].author }}</a><span v-else>{{ quotes[nextQ].author }}</span></p>
          </div>

        </div>
        <div class="welcome">
          <img class="fupihey" src="/img/FupiHey.png" alt="Avatar do Fupi" title="oi" />
          <img class="seta" src="/img/SetaLoka.png" alt="Seta apontando para o Fupi" />
          <div class="info">
            <h1>Olá! Eu sou o Fupi!</h1>
            <p>Neste site você verá as coisas que eu faço!<br>Entre elas:</p>
            <div class="cats">
              <NuxtLink to="/jogos">
                <img class="reduced-motion" src="/img/icons/jogos.png" alt="Jogos">
                <h1>Jogos</h1>
              </NuxtLink>
              <NuxtLink to="/musica">
                <img class="reduced-motion" src="/img/icons/musica.png" alt="Música">
                <h1>Música</h1>
              </NuxtLink>
              <NuxtLink to="/videos">
                <img class="reduced-motion" src="/img/icons/videos.png" alt="Vídeos">
                <h1>Vídeos</h1>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Container from '~/components/Container.vue'

const allQuotes = {
  pt: [
    { text: "É gostosinho", author: "Charis", link: "https://twitter.com/char_alian/", nfe: true },
    { text: ":d", author: "Fupi" },
    { text: ":v", author: "Fupi" },
    { text: "Quantidade > qualidade, para quem está entediado o suficiente.", author: "Fupi" },
    { text: "QUEM VOCÊ PENSA QUE É??? DILMA ROUSSEFF?????", author: "Fupi de 0 anos", nfe: true },
    { text: "eu odeio prolapso anal", author: "Charis", link: "https://twitter.com/char_alian/", nfe: true },
    { text: "nao!!! nao pissa em mim!!", author: "Neon" },
    { text: "aueguh :V", author: "Charis pós-bufa", link: "https://twitter.com/char_alian/", nfe: true },
  ],
  en: [
    { text: ":d", author: "Fupi" },
    { text: ":v", author: "Fupi" },
    { text: "Quantity > quality if you're bored enough", author: "Fupi" },
    { text: "i hate anal prolapse", author: "Charis", link: "https://twitter.com/char_alian/", nfe: true },
    { text: "aueguh :V", author: "Charis", link: "https://twitter.com/char_alian/", nfe: true },
  ]
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(allQuotes);

const filteredQuotes = {
  pt: allQuotes.pt.filter((x) => !x.nfe),
  en: allQuotes.en.filter((x) => !x.nfe),
}

const featuredList = [
  { category: "jogos", slug: "wrap", cover: "wrap.png"},
  { category: "musica", slug: "slampe", cover: "slampe.png"},
];

export default {
  components: { Container, },
  data() {
    return {
      currQ: 0,
      nextQ: 1,
      animating: false,
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  async asyncData({ $content, app }) {
    let featured = [];
    for (const i of featuredList) {
      featured.push({ post: await $content(`${app.i18n.locale}/${i.category}`, i.slug).only(["title", "description", "icon"]).fetch(), cover: i.cover, category: i.category, slug: i.slug, });
    }

    return { featured }
  },
  computed: {
    quotes() {
      this.currQ = 0;
      this.nextQ = 1;
      if (this.$store.state.nfe.nfe) {
        return allQuotes[this.$i18n.locale];
      }
      return filteredQuotes[this.$i18n.locale];
    }
  },
  head() {
    const titles = ["Fupi", "Fupi!!", "Fupi :v", "Fupi ._.", "xX-_fUpI_-Xx", "fupi"];
    let title = "Fupi";
    if (Math.random() > 0.8) {
      title = titles[Math.floor(Math.random() * titles.length)];
    }
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: this.$t("fupiDesc"), },
        { hid: 'keywords', name: 'keywords', content: this.$t("fupiTags")},
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: "Fupi" },
        { hid: 'og:description', property: 'og:description', content: this.$t("fupiDesc") },
        // Twitter
        { hid: 'twitter:title', name: 'twitter:title', content: "Fupi" },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t("fupiDesc") }
      ]
    }
  },
  methods: {
    nextQuote() {
      this.animating = true;
    },
    animationEnd() {
      this.animating = false;
      this.currQ += 1;
      if (this.currQ >= this.quotes.length) {
        this.currQ = 0;
      }
      this.nextQ += 1;
      if (this.nextQ >= this.quotes.length) {
        this.nextQ = 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  gap: 0.875rem;
  margin: 2.625rem 0;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  .featured {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;

    .swiper-button-prev, .swiper-button-next {
      object-fit: contain;
      width: 0.875rem;
      height: 1.5625rem;
      top: auto;
      bottom: 2.4rem;
      transition: transform 300ms;
      transform: scale(100%);

      &:hover {
        transform: scale(120%);
      }
    }

    .swiper-button-next {
      right: 1rem;
    }

    .swiper-button-prev {
      left: 1rem;
    }

    .project {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: 20rem;
      text-decoration: none;
      color: white;
      background: var(--theme-btn);

      @media (max-width: 1024px) {
        height: 60vw;
      }

      &:hover {
        .cover {
          background-size: 110%;
        }

        .btn {
          background: var(--theme-hov);
          box-shadow: inset 0em -0.6em rgba(0, 0, 0, 0.15);
        }
      }

      .cover {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: 100%;
        transition: background-size 300ms var(--trans-smooth);
      }

      .btn {
        background: var(--theme-btn);
        padding: 1.25rem 3.75rem;
        display: flex;
        gap: 1.25rem;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 10px 10px;
        box-shadow: inset 0em -0.4em rgba(0, 0, 0, 0.15);

        transition: box-shadow 150ms var(--trans-smooth), background-color 150ms var(--trans-smooth);

        img {
          height: 6rem;
          width: 6rem;
          margin: -1rem;
          object-fit: contain;
        }

        .info {
          width: 100%;

          .title {
            font-weight: bold;
            font-size: 1.25rem;
            line-height: 1.75rem;
            text-align: center;
          }

          .description {
            font-style: italic;
            font-size: 1rem;
            line-height: 1.25rem;
            text-align: center;
          }
        }
      }
    }
  }

  .intro {
    width: 100%;

    .quotes {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      cursor: default;
      overflow: hidden;
      height: 3.5625rem;

      .quote {
        width: fit-content;
        transform: translateY(0%);

        &.transition {
          animation-duration: 0.6s;

          &:nth-child(1) {
            animation-name: fadeOut;
          }

          &:nth-child(2) {
            animation-name: fadeIn;
          }

          @keyframes fadeIn {
            from {
              transform: translateY(0%);
              opacity: 0;
            }

            to {
              transform: translateY(-100%);
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              transform: translateY(0%);
              opacity: 1;
            }

            to {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
        }

        .text {
          display: flex;
          align-items: center;
          justify-content: center;

          p {
            font-size: 2.25rem;
            font-weight: bold;
            line-height: 100%;
          }

          .main {
            font-size: 0.875rem;
            font-weight: normal;
            font-style: italic;
            margin: 0 0.6rem 0 0.6rem;
            text-align: center;
          }

          .lq {
            margin-bottom: -1.5rem;
          }
        }

        .author {
          font-size: 0.875rem;
          text-align: right;
          margin-right: 1rem;
        }
      }
    }

    .welcome {
      background: #FFFFFF;
      box-shadow: inset 0px 9.6px 0px rgba(0, 0, 0, 0.05);
      border-radius: 10px;

      padding: 2.1875rem 1.6875rem 0 6rem;
      margin-left: 3.6563rem;
      margin-top: 1.2rem;
      margin-bottom: 4rem;
      position: relative;

      @media (max-width: 768px) {
        padding: 2.1875rem 1.6875rem 0 1.6875rem;
        margin-top: 4.6rem;
        margin-left: 0;
      }

      .fupihey {
        left: -3.9rem;
        top: 2.5625rem;
        position: absolute;
        width: 9.4375rem;

        @media (max-width: 768px) {
          top: -4.2rem;
          left: 50%;
          transform: translateX(-80%);

          width: 7rem;
        }
      }

      .seta {
        left: 3.1563rem;
        top: -0.5437rem;
        position: absolute;
        width: 8.125rem;

        @media (max-width: 768px) {
          top: -1.2rem;
          left: 50%;
          right: 50%;
          transform: translateX(30%) rotate(30deg);
          width: 5rem;
          transform-origin: center;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;
        
        h1 {
          text-shadow: 0px 0px 5px rgb(255, 255, 255);
          font-weight: bold;
          font-size: 20px;
          line-height: 23px;
          text-align: center;
          z-index: 1;
        }

        p {
          font-style: italic;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          z-index: 1;
        }

        .cats {
          margin-bottom: -3.125rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 0.5rem;

          a {
            text-decoration: none;
            color: black;

            &:hover {
              img {
                transform: rotate(6deg) scale(110%);
              }
            }

            img {
              min-width: 4.1563rem;
              max-width: 7.625rem;
              width: 100%;
              position: relative;

              transition-property: transform;
              transition-timing-function: var(--trans-smooth);
              transition-duration: 200ms;

              &:nth-child(3) {
                width: 8.3125rem;
                width: 100%;
              }
            }

            h1 {
              text-shadow: none;
              margin-top: -1rem;
            }
          }
        }
      }
    }
  }
}


</style>