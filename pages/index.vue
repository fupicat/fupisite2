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
addQuote("É gostosinho2", "Charis2");
addQuote("É gostosinho3", "Charis3");

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
}

.featured {
  background: var(--theme-main);
  border-radius: 10px;
  width: 100%;
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
}
</style>