import { VueShowdownPlugin } from 'vue-showdown';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueShowdownPlugin);
});
