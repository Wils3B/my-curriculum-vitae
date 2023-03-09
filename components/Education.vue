<template>
  <section class="education py-3 position-relative overflow-hidden">
    <h5 class="fw-medium">{{ $t(education.title) }}</h5>
    <h6 class="fw-medium text-light">
      {{ $t(education.school) }}
      · {{ $t(education.location) }} · {{ education.period.start }} - {{ education.period.end }}
    </h6>
  </section>
</template>

<script>
export default {
  name: 'Education',
  props: {
    education: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources.scss';

.education {
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
