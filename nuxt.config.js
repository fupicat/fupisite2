export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fupisite2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap' }
    ]
  },

  generate: {
  },

  tailwindcss: {
    config: {
      darkMode: "class",
      theme: {
        extend: {
          spacing: {
            pc: "10%",
          },
          colors: {
            transparent: 'transparent',
            purple: {
              nav: '#6E438D',
              hov: '#8C4DBA',
              hov2: '#a660ce',
              bg: '#e8d7e6',
            }
          },
          zIndex: {
            '1': '1',
          },
          translate: {
            '200': '200%',
            '-200': '-200%',
          },
          rotate: {
            '360': '360deg',
          },
        }
      },
      variants: {
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
      },
    }
  },

  content: {
    fullTextSearchFields: ['title', 'description', 'tags', 'text'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  i18n: {
    baseUrl: 'https://fupi.netlify.app',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js',
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        name: 'Português',
        file: 'pt.js',
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: 'pt',
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: 'pt',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}