<template>
  <container>
    <div class="main">
      <div class="featured">

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
              <NuxtLink to="/musica">
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

const allQuotes = [];
const addQuote = (text, author, nfe = false, link) => { allQuotes.push({ text, author, nfe, link }) };
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

addQuote("É gostosinho", "Charis", true, "https://twitter.com/char_alian/");
addQuote(":d", "Fupi");
addQuote(":v", "Fupi");

shuffleArray(allQuotes);

const filteredQuotes = allQuotes.filter((x) => !x.nfe);

export default {
  components: { Container, },
  data() {
    return {
      currQ: 0,
      nextQ: 1,
      animating: false,
    }
  },
  computed: {
    quotes() {
      this.currQ = 0;
      this.nextQ = 1;
      if (this.$store.state.nfe.nfe) {
        return allQuotes;
      }
      return filteredQuotes;
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
    background: var(--theme-main);
    border-radius: 10px;
    width: 100%;

    @media (max-width: 1024px) {
      height: 50vw;
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

      .fupihey {
        left: -3.9rem;
        top: 2.5625rem;
        position: absolute;
        width: 9.4375rem;
        height: 8.25rem;
      }

      .seta {
        left: 3.1563rem;
        top: -0.5437rem;
        position: absolute;
        width: 8.125rem;
        height: 3.6875rem;
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
          justify-content: space-between;
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