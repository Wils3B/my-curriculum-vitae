<template>
  <div class="page">
    <section>
      <h4 class="section-title mb-1">
        <Icon class="icon" name="ic:outline-work" />
        <span class="section-title__text"
          >{{ $t('messages.work-experience') }} ({{ $t('messages.next') }})</span
        >
      </h4>
      <WorkExperience :experience="experiences[3]" class="first" />
      <WorkExperience :experience="experiences[4]" />
      <WorkExperience :experience="experiences[5]" />
      <WorkExperience :experience="experiences[6]" class="last" />
    </section>

    <section class="pt-4">
      <h4 class="section-title mb-2">
        <Icon class="icon" name="mdi:school" />
        <span class="section-title__text">{{ $t('messages.education') }}</span>
      </h4>
      <Education :education="education[0]" class="first" />
      <Education :education="education[1]" class="last" />
    </section>

    <span class="page-number">
      {{ $t('messages.page-number', { current: 2, total: 4 }) }}
    </span>
  </div>
</template>

<script>
import WorkExperience from '~/components/WorkExperience';
import Education from '~/components/Education';

import experiences from '../data/workExperience.json';
import education from '../data/education.json';

export default {
  name: 'Page2',
  components: { Education, WorkExperience },
  data() {
    return {
      experiences,
      education,
    };
  },
};
</script>

<style scoped>
/* @media print {
  .page-number {
    transform: translateY(10px);
  }
} */

@media print {
  .page-number {
    transform: translateY(-10px);
  }
}
</style>
