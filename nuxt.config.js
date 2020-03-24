
export default {
  env: {  
    strapiBaseUri: process.env.API_URL || "https://txbit.academy/_nuxt"
  },
  
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Blockchain, cryptocurrency and security articles, tutorials and news. Brought to you by Txbit Exchange.` },
      { hid: 'keywords', name: 'keywords', content: 'txbit, academy, lessons, tutorials, tips, news, cryptocurrency, blockchain' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:700,800&display=swap' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "#ffb300",
    height: '1px'
  },
  /*
  ** Global CSS
  */

  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/spahack.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/gtm',
    '@nuxtjs/moment',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      icons: {
        solid: true,
        regular: true,
        brands:true,
      }
    }]
  ],
  gtm: {
    id: 'GTM-W48RZQ7',
    pageTracking: true,
    dev: false
  },
  /*
  ** Nuxt.js modules
  */

  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxt/http',
    '@nuxtjs/axios'
  ],

  http: {
    // proxyHeaders: false
  },

  axios: {
    // proxyHeaders: false
  },

  markdownit: {  
    preset: 'default',
    html: true,
    linkify: true,
    breaks: true,
    injected: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      },
    }
  },
  /*
  ** Build configuration
  */

  generate: {
    routes: function() {
      return [
        '/articles/what-is-cryptocurrency',
        '/articles/the-meaning-of-hodl',
        '/articles/what-is-dust',
        '/articles/what-is-limit-order',
        '/articles/what-is-proof-of-stake',
        '/articles/what-is-proof-of-work',
        '/articles/good-security-practices',
        '/articles/what-is-phishing',
        '/articles/what-is-a-keylogger',
        '/articles/the-meaning-of-moon',
        '/articles/hard-forks-vs-soft-forks',
        '/viewall',
        '/404',
        'categories/exchange',
        'categories/security',
        'categories/blockchain',
        'categories/terminology',
        'projects/',
        'project/daps-coin-introduction',
        'project/colossus-xt-introduction',
      ]
    }
  }
}
