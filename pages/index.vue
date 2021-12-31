<template>
  <container>
    <div class="main">
      <div class="featured">

      </div>
      <div class="intro">
        <div class="quotes" @click="nextQuote()">
          <quote v-for="quote in quotes" :key="quote.text" :text="quote.text" :author="quote.author" :selected="quote.selected"></quote>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Container from '~/components/Container.vue'
import Quote from '~/components/home/Quote.vue'

const quotes = [];
const addQuote = (text, author) => { quotes.push({ text, author, selected: false }) };
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

addQuote("É gostosinho", "<a tabindex='-1' href='#'>Charis</a>");
addQuote("É gostosinho2", "<a tabindex='-1' href='#'>Charis2</a>");
addQuote("É gostosinho3", "<a tabindex='-1' href='#'>Charis3</a>");

shuffleArray(quotes);

quotes[0].selected = true;

export default {
  components: { Container, Quote, },
  data() {
    return {
      quotes,
      currQuote: 0,
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
      this.quotes[this.currQuote].selected = false;
      this.currQuote += 1;
      if (this.currQuote >= this.quotes.length) {
        this.currQuote = 0;
      }
      this.currQuote
      this.quotes[this.currQuote].selected = true;
    }
  }
}
</script>

<style scoped>
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
}

.intro .quotes {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  cursor: default;
  overflow: hidden;
  height: 3.5625rem;
}
</style>