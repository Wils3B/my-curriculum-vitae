<template>
  <div class="page" ref="page">
    <PersonalInformation :data="personalInformation" class="mb-4" />
    <Contacts :contacts="contacts" class="mb-1" />
    <section class="pt-4">
      <h4 class="section-title mb-2">
        <Icon class="icon" name="ic:outline-work" />
        <span class="section-title__text">{{ $t('messages.work-experience') }}</span>
      </h4>
      <WorkExperience :experience="experiences.jam" class="first" />
      <WorkExperience :experience="experiences.quable" />
      <WorkExperience :experience="experiences.mda" class="pb-0" />
    </section>
    <span class="page-number">
      {{ $t('messages.page-number', { current: 1, total: 3 }) }}
    </span>
  </div>
</template>

<script>
import PersonalInformation from '~/components/PersonalInformation';
import Contacts from '~/components/Contacts';
import WorkExperience from '~/components/WorkExperience';

import personalInformation from '../data/personalInformation.json';
import experiences from '../data/workExperience.json';
import contacts from '../data/contacts.json';

export default {
  name: 'Page1',
  components: { WorkExperience, Contacts, PersonalInformation },
  data() {
    return {
      personalInformation,
      contacts,
      experiences,
    };
  },
};
</script>

<style scoped>
/* @media print {
  .page-number {
    transform: translateY(20px);
  }
} */

@media print {
  .page-number {
    transform: translateY(50px);
  }
}
</style>
