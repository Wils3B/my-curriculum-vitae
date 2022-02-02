<template>
  <div class="row">
    <div class="col-12 col-md-6 py-2" v-for="project of projects" :key="project.title">
      <h5 class='fw-medium'>{{ project.title }}</h5>
      <p class="text-light">
        {{ $t(project.description) }}
        <a :href="project.link" target="_blank">{{ $t('messages.view-on-github') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalProjects',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
