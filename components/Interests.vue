<template>
  <ul class="list-unstyled interests-list">
    <li class="mb-0 interest-col" v-for="interest of interests" :key="interest">
      <div class="interest-badge">
        {{ $rt(interest) }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Interests',
  props: {
    interests: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources.scss';

.interests-list {
  display: flex;
  flex-flow: row wrap;
  margin: -0.5rem;
}

.interest-col {
  padding: 0.5rem;
}

.interest-badge {
  padding: 0.7rem 0.6rem;
  background-color: rgba($light, 0.7);
  border: 0.2rem solid $dark;
  border-radius: 0.4rem;
  font-weight: 500;
  display: inline-block;
  font-size: 1.1rem;
  line-height: 1;
}
</style>
