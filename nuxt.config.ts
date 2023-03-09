import enLocales from './locales/en.json';
import frLocales from './locales/fr.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/i18n', 'nuxt-icon'],
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: enLocales,
        fr: frLocales,
      },
    },
  },
  css: ['~/assets/scss/global.scss']
});
