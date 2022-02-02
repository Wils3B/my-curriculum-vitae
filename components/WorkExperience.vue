<template>
  <section class="experience py-3 position-relative overflow-hidden">
    <h5 class="fw-medium">{{ $t(experience.title) }}</h5>
    <h6 class="fw-medium text-light">
      {{ experience.company }}
      <span v-if="experience.location"> · {{ $t(experience.location) }} </span>
      · {{ experience.period.start }} - {{ experience.period.end }}
    </h6>
    <p v-if="experience.description" class="mb-1 font-italic text-light">
      <vue-showdown class="p-no-margin text-light" :markdown="$t(experience.description)" />
    </p>
    <ul class="pl-4 py-2 mb-0">
      <li
        v-for="(item, index) of $t(experience.achievements)"
        :key="index"
        :class="{ 'mb-1': index !== experience.achievements.length - 1 }"
      >
        <VueShowdown class="mb-0 p-no-margin" :markdown="item" />
      </li>
    </ul>
    <p class="mb-0 mt-1 fw-medium text-light">
      Technologies: {{ experience.technologies.join(', ') }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'WorkExperience',
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.experience {
  padding-left: 2rem;
  padding-right: 1rem;
  margin-left: -2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1.25rem;
    height: 1rem;
    width: 1rem;
    background-color: $primary;
    border-radius: 50%;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: $light;
    width: 0.2rem;
    height: 100%;
    left: 0.4rem;
    top: 0;
    z-index: 1;
  }

  &.first::after {
    top: 1.3rem;
  }

  &.last::after {
    height: 1.25rem;
  }
}
</style>
