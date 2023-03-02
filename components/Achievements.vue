<template>
  <div class="row">
    <div class="py-2 mb-0 col-12 col-md-6" v-for="achievement of achievements" :key="achievement.title">
      <h5 class="fw-medium">{{ $t(achievement.title) }}</h5>
      <p class="mb-0 text-light">{{ $t(achievement.description) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievements',
  props: {
    achievements: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
