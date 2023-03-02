<template>
  <div class="page" ref="page">
    <PersonalInformation :data="personalInformation" class="mb-4" />
    <Contacts :contacts="contacts" class="mb-1" />
    <section class="pt-4">
      <h4 class="section-title mb-2">
        <Icon class="icon" :icon="icons.outlineWorkIcon" />
        <span class="section-title__text">{{ $t('messages.work-experience') }}</span>
      </h4>
      <WorkExperience :experience="experiences[0]" class="first" />
      <WorkExperience :experience="experiences[1]" />
      <WorkExperience :experience="experiences[2]" class="pb-0" />
    </section>
    <span class="page-number">
      {{ $t('messages.page-number', { current: 1, total: 4 }) }}
    </span>
  </div>
</template>

<script>
import PersonalInformation from '~/components/PersonalInformation';
import Contacts from '~/components/Contacts';
import contacts from '../data/contacts';
import WorkExperience from '~/components/WorkExperience';
import { Icon } from '@iconify/vue2';
import outlineWorkIcon from '@iconify/icons-ic/outline-work';

const personalInformation = require('../data/personalInformation.json');
const experiences = require('../data/workExperience.json');

export default {
  name: 'Page1',
  components: { WorkExperience, Contacts, PersonalInformation, Icon },
  data() {
    return {
      personalInformation,
      contacts,
      experiences,
      icons: { outlineWorkIcon },
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
    transform: translateY(-10px);
  }
}
</style>
