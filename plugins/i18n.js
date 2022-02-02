import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const en = require('~/locales/en.json');
const fr = require('~/locales/fr.json');

export default ({ app, store }) => {
  // eslint-disable-next-line no-param-reassign
  app.i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
    },
  });
};
