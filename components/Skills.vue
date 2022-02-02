<template>
  <div class="py-3">
    <ul class="list-unstyled skills-list">
      <li v-for="skill of skills" :key="skill" class="skill-col">
        <span class="skill-badge">
          {{ skill }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.skills-list {
  display: flex;
  flex-flow: row wrap;
  margin: -0.5rem -0.3rem;
}

.skill-col {
  padding: 0.5rem 0.3rem;
}

.skill-badge {
  padding: 0.5rem 0.6rem;
  background-color: $primary-light;
  border-radius: 0.4rem;
  font-weight: 500;
  display: inline-block;
  font-size: 1.1rem;
}
</style>
