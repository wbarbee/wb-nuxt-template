import constants from './assets/libs/constants';

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: constants.SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { preperty: 'lang', content: 'en' },
      { property: 'author', content: constants.SITE_AUTHOR },
      { property: 'favicon', content: '/favicon.ico' },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: constants.SITE_TITLE,
      },
      {
        hid: 'title',
        name: 'title',
        content: constants.SITE_TITLE,
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#baf505',
      },
      {
        property: 'og:title',
        content: 'Stan Burnside',
      },
      {
        property: 'og:image',
        content: '/main_landing_sm.png',
      },
      {
        property: 'start_url',
        content: '/',
      },
      {
        hid: 'name',
        name: 'name',
        content: constants.SITE_TITLE,
      },
      {
        hid: 'description',
        name: 'description',
        content: constants.SITE_DESCRIPTION,
      },
      {
        property: 'og:description',
        content: constants.SITE_DESCRIPTION,
      },
      {
        property: 'og:site_name',
        content: constants.SITE_TITLE,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple_icon.png' },
      {
        rel: 'apple-touch-icon',
        property: 'apple-touch-icon',
        content: '/apple-icon.png',
      },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },

  router: {
    mode: 'history',
  },
  netlify: {
    mergeSecurityHeaders: true,
    redirects: [
      {
        from: '/index.html',
        to: '/',
        status: 302,
        force: true,
      },
    ],
  },
  sitemap: {
    hostname: 'https://www.stanburnside.com',
    gzip: true,
    exclude: [],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/vars.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@aceforth/nuxt-netlify'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-webfontloader',
    [
      '@nuxtjs/pwa',
      {
        icon: false,
        workbox: {
          clientsClaim: false,
        },
      },
    ],
  ],
  webfontloader: {
    google: {
      families: [
        'Roboto:100,300,300i,400,500,600,600i,700,600i',
        'Open Sans:300,500,500i,600i,700,700i',
      ],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true },
                ],
              },
            },
          });
        }
      });
    },
  },
};
