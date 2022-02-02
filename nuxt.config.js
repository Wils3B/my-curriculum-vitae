export default {
  ssr: true,
  target: 'server',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Wilson Gouanet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Wilson Gouanet CV',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/global.scss'],
  styleResources: {
    scss: ['~assets/scss/resources.scss'],
  },
  bootstrapVue: {
    bootstrapVueCSS: false,
    bootstrapCSS: false,
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue-showdown.js',
    { src: '~/plugins/webfont.js', ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/style-resources'],
};
