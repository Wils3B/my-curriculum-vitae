<template>
  <div class="p-5 bg-white">
    <h1>Hi</h1>
    <div class="text-uppercase display-4 mb-5">
      <span
        v-for="locale of $i18n.availableLocales"
        class="mr-2"
        :class="{ selectable: locale !== $i18n.locale }"
        @click="$i18n.locale = locale"
      >
        {{ locale }}
      </span>
    </div>
    <ul class="list-unstyled display-3">
      <li>
        <nuxt-link to="/page1">page 1</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page2">page 2</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page3">page 3</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page4">page 4</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" scoped>
.selectable {
  color: $primary;
  text-decoration: underline;
  cursor: pointer;
}
</style>
