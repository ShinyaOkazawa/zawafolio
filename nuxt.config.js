module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: require('./config/head'),

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/scss/style.scss'],
  styleResources: {
    scss: ['~/assets/scss/_vue-globals.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/pwa', 'nuxt-webfontloader'],

  webfontloader: {
    google: {
      // Loads Open Sans font with weights 300 and 400 + display font as swap
      families: ['Mukta|Noto+Serif+JP|Suranna&display=swap&subset=japanese']
    }
  },

  workbox: {
    cacheNames: {
      prefix: 'zawafolio'
    },
    config: {
      debug: true
    },
    dev: process.env.NODE_ENV === 'development',
    runtimeCaching: [
      {
        // google fonts stylesheets
        handler: 'staleWhileRevalidate',
        urlPattern: '.*fonts.googleapis.com/.*',
        strategyOptions: {
          cacheName: 'google-fonts-stylesheets'
        }
      },
      {
        // google fonts files
        handler: 'cacheFirst',
        urlPattern: '.*fonts.gstatic.com/.*',
        strategyOptions: {
          cacheName: 'google-fonts-webfonts',
          cacheableResponse: {
            statuses: [0, 200]
          },
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 30
          }
        }
      }
    ]
  },
  icon: {
    iconSrc: './static/icon.png',
    sizes: [192, 512]
  },
  manifest: {
    lang: 'ja',
    name: 'ZAWAfolio',
    description: 'ZAWAfolio is a portfolio website of web developer ZAWA.',
    short_name: 'ZAWAfolio',
    start_url: '/?utm_source=homescreen',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  meta: {
    author: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
