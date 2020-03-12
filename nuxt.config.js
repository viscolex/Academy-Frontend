
export default {
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
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'uikit/dist/css/uikit.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '@assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/fontawesome.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-W48RZQ7' }],
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@neneos/nuxt-animate.css',
    '@nuxtjs/axios',
  ],

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
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  },
  generate: {
    routes: function() {
      return [
        '/articles/1',
        '/articles/2',
        '/articles/3',
        '/articles/10',
        '/articles/11',
        '/articles/12',
        '/articles/13',
        '/articles/14',
        '/articles/15',
        '/articles/16',
        '/viewall',
        '/404',
        'categories/1',
        'categories/2',
        'categories/3',
        'categories/5',
        'projects/',
        'project/1',
        'project/2',
      ]
    }
  }
}
