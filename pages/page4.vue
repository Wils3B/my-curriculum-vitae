<template>
  <div class="page">
    <section class="py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" :icon="icons.certificate24Filled" />
        <span class="section-title__text"
          >{{ $t('messages.online-courses') }} ({{ $t('messages.next') }})</span
        >
      </h4>
      <Certificates :certificates="certificates" />
    </section>

    <section class="mt-4 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" :icon="icons.projectFilled" />
        <span class="section-title__text">{{ $t('messages.personal-projects') }}</span>
      </h4>
      <PersonalProjects :projects="personalProjects" />
    </section>

    <section class="py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" :icon="icons.goldFilled" />
        <span class="section-title__text">{{ $t('messages.achievements') }}</span>
      </h4>
      <Achievements :achievements="achievements" />
    </section>

    <section class="mt-2 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" :icon="icons.translate" />
        <span class="section-title__text">{{ $t('messages.languages') }}</span>
      </h4>
      <Languages :languages="languages" />
    </section>

    <section class="mt-2 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" :icon="icons.pacMan" />
        <span class="section-title__text">{{ $t('messages.interests') }}</span>
      </h4>
      <Interests :interests="$t('interests')" />
    </section>

    <span class="page-number">
      {{ $t('messages.page-number', { current: 4, total: 4 }) }}
    </span>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import certificate24Filled from '@iconify/icons-fluent/certificate-24-filled';
import projectFilled from '@iconify/icons-ant-design/project-filled';
import goldFilled from '@iconify/icons-ant-design/gold-filled';
import translate from '@iconify/icons-mdi/translate';
import pacMan from '@iconify/icons-mdi/pac-man';
import Certificates from '~/components/Certificates';
import PersonalProjects from '~/components/PersonalProjects';
import Achievements from '~/components/Achievements';
import Languages from '~/components/Languages';
import Interests from '~/components/Interests';

const certificates = require('~/data/certificates.json');
const personalProjects = require('~/data/personalProjects.json');
const achievements = require('~/data/achievements.json');
const languages = require('~/data/languages.json');

export default {
  name: 'Page4',
  components: { Interests, Languages, Achievements, PersonalProjects, Certificates, Icon },
  data() {
    return {
      icons: { certificate24Filled, projectFilled, goldFilled, translate, pacMan },
      certificates: certificates.slice(10, certificates.length),
      personalProjects,
      achievements,
      languages,
    };
  },
};
</script>

<style scoped>
/* @media print {
  .page-number {
    transform: translateY(120px);
  }
} */

@media print {
  .page-number {
    transform: translateY(15px);
  }
}
</style>
