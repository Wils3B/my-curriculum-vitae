<template>
  <div class="row">
    <div class="col-12 col-md-6 py-2" v-for="skill of skills" :key="skill.title">
      <h5 class="mb-3 fw-medium">
        {{ $t(skill.title) }}
      </h5>
      <Icon v-for="(icon, idx) of skill.icons" :key="idx" :icon="icon" class="icon" />
      <ul class="pl-3 mt-3 p">
        <li v-for="item of skill.skillItems" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
  name: 'ProgrammingSkills',
  components: { Icon },
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: 2.4rem;
  margin-right: 0.8rem;
}
</style>
