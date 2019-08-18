const pkg = require('./package')

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
  modules: ['@nuxtjs/style-resources'],

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
