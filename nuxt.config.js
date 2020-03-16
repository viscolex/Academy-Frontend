
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
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */

 pageTransition: {
    name: 'page',
    mode: 'out-in',
    duration: 0,
  },


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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/gtm',
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
    '@nuxtjs/markdownit'
  ],
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
    extend (config, ctx) {
    }
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
