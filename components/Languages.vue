<template>
  <ul class="list-unstyled row">
    <li class="mb-0 col-12 col-md-5 py-2" v-for="language of languages" :key="language.name">
      <h6 class="fw-medium">
        {{ $t(language.name) }}
      </h6>
      <p class="mb-0 text-primary">
        {{ $t(language.level) }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Languages',
  props: {
    languages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
