<template>
  <div class="p-5 bg-white">
    <h1>Hi</h1>
    <div class="text-uppercase display-4 mb-5">
      <span
        v-for="locale of $i18n.availableLocales"
        class="mr-2"
        :key="locale"
        :class="{ selectable: locale !== $i18n.locale }"
        @click="() => $router.push(switchLocalePath(locale))"
      >
        {{ locale }}
      </span>
    </div>
    <ul class="list-unstyled display-3">
      <li>
        <nuxt-link :to="localePath('/page1')">page 1</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/page2')">page 2</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/page3')">page 3</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/page4')">page 4</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { localePath, switchLocalePath } from 'vue-i18n-routing';

export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources.scss';

.selectable {
  color: $primary;
  text-decoration: underline;
  cursor: pointer;
}
</style>
