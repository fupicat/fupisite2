<template>
  <container>
    <div class="main">
      <div class="swiper featured">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="proj in featured"
            :key="proj.post.title"
          >
            <NuxtLink
              :to="localePath(`/${proj.category}/${proj.slug}`)"
              :class="`project swiper-slide ${proj.category}`"
            >
              <div
                :style="`background-image: url('${proj.post.cover}')`"
                class="cover"
              ></div>
              <div class="btn">
                <img :src="proj.post.icon" :alt="$t('postIcon')" />
                <div class="info">
                  <p class="title">{{ proj.post.title }}</p>
                  <p class="description">{{ proj.post.description }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <img
          src="/img/Left.png"
          class="swiper-button-prev"
          slot="button-prev"
          :style="`bottom: ${swiperBottom}px`"
        />
        <img
          src="/img/Right.png"
          class="swiper-button-next"
          slot="button-next"
          :style="`bottom: ${swiperBottom}px`"
        />
      </div>
      <div class="intro">
        <client-only>
          <div class="quotes" @click="nextQuote()">
            <div
              @animationend="animationEnd()"
              :class="`quote${animating ? ' transition' : ''}`"
            >
              <div class="text">
                <p class="lq">&ldquo;</p>
                <p class="main">{{ quotes[currQ].text }}</p>
                <p class="rq">&rdquo;</p>
              </div>
              <p @click.stop class="author">
                ~
                <a v-if="quotes[currQ].link" :href="quotes[currQ].link">{{
                  quotes[currQ].author
                }}</a
                ><span v-else>{{ quotes[currQ].author }}</span>
              </p>
            </div>

            <div :class="`quote${animating ? ' transition' : ''}`">
              <div class="text">
                <p class="lq">&ldquo;</p>
                <p class="main">{{ quotes[nextQ].text }}</p>
                <p class="rq">&rdquo;</p>
              </div>
              <p @click.stop class="author">
                ~
                <a
                  v-if="quotes[nextQ].link"
                  tabindex="-1"
                  :href="quotes[nextQ].link"
                  >{{ quotes[nextQ].author }}</a
                ><span v-else>{{ quotes[nextQ].author }}</span>
              </p>
            </div>
          </div>
        </client-only>
        <div class="welcome">
          <img
            class="fupihey"
            src="/img/FupiHey.png"
            :alt="$t('fupiHead')"
            :title="$t('hi')"
          />
          <img class="seta" src="/img/SetaLoka.png" :alt="$t('arrow')" />
          <div class="info">
            <h1>{{ $t("intro1") }}</h1>
            <p>{{ $t("intro2") }}<br />{{ $t("intro3") }}</p>
            <div class="cats">
              <NuxtLink :to="localePath('/jogos')">
                <img
                  class="reduced-motion"
                  src="/img/icons/jogos.png"
                  :alt="$t('jogos')"
                />
                <h1>{{ $t("jogos") }}</h1>
              </NuxtLink>
              <NuxtLink :to="localePath('/musica')">
                <img
                  class="reduced-motion"
                  src="/img/icons/musica.png"
                  :alt="$t('musica')"
                />
                <h1>{{ $t("musica") }}</h1>
              </NuxtLink>
              <NuxtLink :to="localePath('/videos')">
                <img
                  class="reduced-motion"
                  src="/img/icons/videos.png"
                  :alt="$t('videos')"
                />
                <h1>{{ $t("videos") }}</h1>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="categories">
      <category-compact
        :title="$t('jogosRandom')"
        cat="jogos"
        :posts="random.jogos"
        :postsSafe="randomSafe.jogos"
      />
      <category-compact
        :title="$t('musicaRandom')"
        cat="musica"
        :posts="random.musica"
        :postsSafe="randomSafe.musica"
      />
      <category-compact
        :title="$t('videosRandom')"
        cat="videos"
        :posts="random.videos"
        :postsSafe="randomSafe.videos"
      />
    </div>
    <div class="fanarts">
      <h1>Fanart!</h1>
      <p class="desc" v-html="$t('fanartThanks')"></p>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="fanart in [
              {
                name: 'Gordalho',
                image: 'Gordalho.png',
                link: 'https://twitter.com/Gordogrind/',
              },
              {
                name: 'Randomm',
                image: 'Randomm.png',
                link: 'https://twitter.com/randomm607/',
              },
              {
                name: 'Henrick',
                image: 'henrick.png',
                link: 'https://scratch.mit.edu/users/henrick9/',
              },
              {
                name: 'Rainzi',
                image: 'rainzi.jpg',
                link: 'https://twitter.com/byrainzilol',
              },
              {
                name: 'LuanKCT',
                image: 'LuanKCT.png',
                link: 'https://twitter.com/luankct/',
              },
              {
                name: 'Helivy',
                image: 'Helivy.png',
                link: 'https://www.instagram.com/helivystar/',
              },
              {
                name: 'Luam',
                image: 'Luam.png',
                link: 'https://twitter.com/Luam_16',
              },
              {
                name: 'Faiku',
                image: 'faiku.png',
                link: 'https://twitter.com/faikuuuu',
              },
              {
                name: 'Pandi',
                image: 'Pandi.png',
                link: 'https://scratch.mit.edu/users/Pandi-YT/',
              },
              {
                name: '-Laura-ap_Scratch-',
                image: '-Laura-ap_Scratch-.png',
                link: 'https://scratch.mit.edu/users/-Laura-ap_Scratch-',
              },
              {
                name: 'pixytixy',
                image: 'pixytixy.png',
                link: 'https://scratch.mit.edu/users/pixytixy/',
              },
              {
                name: 'Lalá D.A.',
                image: 'LalaDA.png',
                link: 'https://scratch.mit.edu/users/Lala-Olivio/',
              },
              {
                name: 'criadorfenix',
                image: 'criadorfenix.png',
                link: 'https://www.youtube.com/channel/UCKMUhovNNf8DawEx7raL-PQ',
              },
              {
                name: 'Wangaloide',
                image: 'wangaloide.png',
                link: 'https://twitter.com/Wangaloide',
              },
              {
                name: 'jackson959',
                image: 'jackson959.png',
                link: 'https://scratch.mit.edu/users/jackson959/',
              },
              {
                name: 'bruno290811',
                image: 'bruno290811.png',
                link: 'https://scratch.mit.edu/users/bruno4273298562947/',
              },
              {
                name: 'Passo',
                image: 'passo.png',
                link: 'https://scratch.mit.edu/users/passooficial/',
              },
              {
                name: 'Chara5566',
                image: 'Chara.png',
                link: 'https://scratch.mit.edu/users/Chara5566/',
              },
              {
                name: 'anon',
                image: 'anon.png',
                link: '',
              },
              {
                name: 'GameEngineer',
                image: 'GameEngineer.png',
                link: 'https://scratch.mit.edu/users/GameEnginner/',
              },
              {
                name: 'PN_Scratching',
                image: 'PNScratching.jpg',
                link: 'https://scratch.mit.edu/users/PN_Scratching',
              },
              {
                name: 'Fabriciogamer123neo',
                image: 'fabriciogamer.png',
                link: 'https://scratch.mit.edu/users/fabriciogamer123neo/',
              },
              {
                name: 'Neon',
                image: 'Neon.png',
                link: 'https://twitter.com/Tf12Neon',
              },
              {
                name: 'Lilo5000',
                image: 'Screenshot_20220327-195732_Firefox.jpg',
                link: 'https://scratch.mit.edu/users/lilo5000/',
              },
              {
                name: 'Sonnic1998',
                image: 'Sonnic.png',
                link: 'https://scratch.mit.edu/users/sonnic1998/',
              },
              {
                name: 'Lureis2812',
                image: 'Lureis.png',
                link: 'https://scratch.mit.edu/users/lureis2812/',
              },
              {
                name: 'JohnmakerX',
                image: 'Johnmaker2.png',
                link: 'https://scratch.mit.edu/users/johnmakerX/',
              },
              {
                name: 'LeoLegal',
                image: 'Charalian.png',
              }
            ]"
            :key="fanart.name"
          >
            <img
              :src="`/img/fanart/${fanart.image}`"
              :alt="`Fanart de ${fanart.name}`"
            />
            <p v-if="fanart.link">
              de
              <a :href="fanart.link" target="_blank">{{ fanart.name }}</a> ❤️
            </p>
            <p v-else>de {{ fanart.name }} ❤️</p>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Container from "~/components/Container.vue";
import CategoryCompact from "~/components/list/CategoryCompact.vue";

const featuredList = [
  { category: "jogos", slug: "fire-hazard" },
  { category: "blog", slug: "boas-vindas-novo-site" },
  { category: "musica", slug: "slampe" },
  { category: "ferramentas", slug: "replacer" },
  { category: "etc", slug: "scratch-cat-3d" },
];

const allQuotes = {
  pt: [
    {
      text: "É gostosinho",
      author: "Charis",
      nfe: true,
    },
    { text: ":d", author: "Fupi" },
    { text: ":v", author: "Fupi" },
    {
      text: "Quantidade > qualidade, para quem está entediado o suficiente.",
      author: "Fupi",
    },
    {
      text: "QUEM VOCÊ PENSA QUE É??? DILMA ROUSSEFF?????",
      author: "Fupi de 0 anos",
      nfe: true,
    },
    {
      text: "eu odeio prolapso anal",
      author: "Charis",
      nfe: true,
    },
    { text: "nao!!! nao pissa em mim!!", author: "Neon" },
    {
      text: "aueguh :V",
      author: "Charis pós-bufa",
      nfe: true,
    },
    {
      text: "Toda a vida nesse planeta morreu...",
      author: "God Complex",
    },
    {
      text: "Por gentileza, dirija-se as fezes.",
      author: "PN_Scratching",
    },
    {
      text: "eu gosto de carne é bom",
      author: "passo do at",
    },
    {
      text: "Vou tentar não ficar quieto.",
      author: "Maujoa",
    },
    {
      text: "lembrar pra n esquecer.txt",
      author: "Maujoa",
    },
    {
      text: "- cabeça de cuia",
      author: "Lalá D.A.",
    },
    {
      text: "- do caralho",
      author: "Lalá D.A.",
      nfe: true,
    },
    {
      text: "FUPEQUETE???!!?!?",
      author: "smixqse",
    },
    {
      text: "uwu",
      author: "Wangaloide o tempo todo (sério ela não para smh)",
    },
    {
      text: "AHAAAAAAAAAAAAAAAAAAAA",
      author: "Wangaloide",
    },
    {
      text: "Sabia que você pode enviar suas próprias frases para aparecer aqui? :O",
      author: "Contate-me!",
      link: "/sobre#contato",
    },
  ],
  en: [
    { text: ":d", author: "Fupi" },
    { text: ":v", author: "Fupi" },
    { text: "Quantity > quality if you're bored enough", author: "Fupi" },
    {
      text: "i hate anal prolapse",
      author: "Charis",
      nfe: true,
    },
    {
      text: "aueguh :V",
      author: "Charis",
      nfe: true,
    },
    {
      text: "All life has died in this planet...",
      author: "God Complex",
    },
    {
      text: "Did you know you can submit your own quotes for this page? :O",
      author: "Contact me!",
      link: "/en/sobre#contato",
    },
  ],
};

function shuffleArray(arr) {
  let array = arr;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle all quotes
for (const i in allQuotes) {
  if (Object.hasOwnProperty.call(allQuotes, i)) {
    allQuotes[i] = shuffleArray(allQuotes[i]);
  }
}

const filteredQuotes = {
  pt: allQuotes.pt.filter((x) => !x.nfe),
  en: allQuotes.en.filter((x) => !x.nfe),
};

export default {
  components: { Container, CategoryCompact },
  data() {
    return {
      currQ: 0,
      nextQ: 1,
      animating: false,
      swiperBottom: 0,
    };
  },
  async asyncData({ $content, store, app }) {
    let featured = [];

    let random = {
      jogos: [],
      musica: [],
      videos: [],
    };

    let randomSafe = {
      jogos: [],
      musica: [],
      videos: [],
    };

    try {
      // Get featured projects
      for (const i of featuredList) {
        featured.push({
          post: await $content(`${app.i18n.locale}/${i.category}`, i.slug)
            .only(["title", "description", "icon", "cover"])
            .fetch(),
          category: i.category,
          slug: i.slug,
        });
      }

      // Get random projects
      for (let cat in random) {
        let posts = await $content(`${app.i18n.locale}/${cat}`)
          .only([
            "title",
            "description",
            "slug",
            "icon",
            "tags",
            "posted",
            "nfe",
          ])
          .fetch();
        let postsSafe = posts.filter((x) => !x.nfe);

        const clamp = (val, min, max) => {
          return val > max ? max : val < min ? min : val;
        };

        for (let i = 0; i < clamp(postsSafe.length, 0, 3); i++) {
          // Get random post
          let rand = Math.floor(Math.random() * posts.length);
          random[cat].push(posts[rand]);
          posts.splice(rand, 1);
          console.log(random[cat][i]);

          // Get random safe post
          rand = Math.floor(Math.random() * postsSafe.length);
          randomSafe[cat].push(postsSafe[rand]);
          postsSafe.splice(rand, 1);
          console.log(randomSafe[cat][i]);
        }
      }
    } finally {
      return {
        featured,
        random,
        randomSafe,
      };
    }
  },
  computed: {
    quotes() {
      this.currQ = 0;
      this.nextQ = 1;
      if (this.$store.state.nfe.nfe) {
        return allQuotes[this.$i18n.locale];
      }
      return filteredQuotes[this.$i18n.locale];
    },
  },
  head() {
    const titles = [
      "Fupi",
      "Fupi!!",
      "Fupi :v",
      "Fupi ._.",
      "xX-_fUpI_-Xx",
      "fupi",
      "Fupizera",
      "Full picante",
      "fupgato",
    ];
    let title = "Fupi";
    if (Math.random() > 0.98) {
      title = titles[Math.floor(Math.random() * titles.length)];
    }
    return {
      title,
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        },
        {
          src: "/js/identity.js",
          body: true,
        },
        {
          src: "https://unpkg.com/swiper@8/swiper-bundle.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/swiper@8/swiper-bundle.min.css",
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("fupiDesc"),
        },
        { hid: "keywords", name: "keywords", content: this.$t("fupiTags") },
        // Open Graph
        { hid: "og:title", property: "og:title", content: "Fupi" },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("fupiDesc"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("projetosDesc"),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/covers/Generica.png",
        },
        // Twitter
        { hid: "twitter:title", name: "twitter:title", content: "Fupi" },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("fupiDesc"),
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/img/covers/Generica.png",
        },
      ],
    };
  },
  mounted() {
    const vue = this;
    const featuredSwiper = new Swiper(".featured", {
      slidesPerView: "auto",
      centeredSlides: true,
      speed: 700,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function () {
          vue.swiperBottom =
            this.slides[this.activeIndex].querySelector(".btn").clientHeight /
            2;
        },
        slideChangeTransitionStart: function () {
          vue.swiperBottom =
            this.slides[this.activeIndex].querySelector(".btn").clientHeight /
            2;
        },
      },
    });
    const fanartSwiper = new Swiper(".fanarts .swiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      speed: 700,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });
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
    },
  },
};
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
    height: 20rem;

    @media (max-width: 1024px) {
      height: 60vw;
    }

    .swiper-button-prev,
    .swiper-button-next {
      object-fit: contain;
      width: 0.875rem;
      height: 1.5625rem;
      top: auto;
      transition: transform 300ms, bottom 300ms;
      transform: translateY(50%) scale(100%);

      &:hover {
        transform: translateY(50%) scale(120%);
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
      text-decoration: none;
      color: white;
      background: var(--theme-btn);

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

        transition: box-shadow 150ms var(--trans-smooth),
          background-color 150ms var(--trans-smooth);

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
      background: var(--theme-whitebox);
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
            color: var(--theme-text);

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

.categories {
  margin-bottom: 2.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.fanarts {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--theme-panel);
  text-align: center;
  border-radius: 0.625rem;
  box-shadow: inset 0em 0.4em rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 1.625rem;
    font-weight: bold;
    color: var(--theme-title);
  }

  .desc {
    padding-bottom: 1rem;
  }

  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        max-width: fit-content;
        background: white;
        border-radius: 0.5rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        img {
          height: 14rem;
          object-fit: contain;
        }

        p {
          color: rgb(36, 36, 36);
          padding: 0.3rem 0.5rem;
        }
      }
    }
  }
}
</style>
