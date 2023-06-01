<template>
  <div class="page">
    <section class="py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" name="fluent:certificate-24-filled" />
        <span class="section-title__text"
          >{{ $t('messages.online-courses') }} ({{ $t('messages.next') }})</span
        >
      </h4>
      <Certificates :certificates="certificates" />
    </section>

    <section class="mt-4 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" name="ant-design:project-filled" />
        <span class="section-title__text">{{ $t('messages.personal-projects') }}</span>
      </h4>
      <PersonalProjects :projects="personalProjects" />
    </section>

    <section class="py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" name="ant-design:gold-filled" />
        <span class="section-title__text">{{ $t('messages.achievements') }}</span>
      </h4>
      <Achievements :achievements="achievements" />
    </section>

    <section class="mt-2 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" name="mdi-translate" />
        <span class="section-title__text">{{ $t('messages.languages') }}</span>
      </h4>
      <Languages :languages="languages" />
    </section>

    <section class="mt-2 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" name="mdi:pac-man" />
        <span class="section-title__text">{{ $t('messages.interests') }}</span>
      </h4>
      <Interests :interests="$tm('interests')" />
    </section>

    <span class="page-number">
      {{ $t('messages.page-number', { current: 4, total: 4 }) }}
    </span>
  </div>
</template>

<script>
import Certificates from '~/components/Certificates';
import PersonalProjects from '~/components/PersonalProjects';
import Achievements from '~/components/Achievements';
import Languages from '~/components/Languages';
import Interests from '~/components/Interests';

import certificates from '~/data/certificates.json';
import personalProjects from '~/data/personalProjects.json';
import achievements from '~/data/achievements.json';
import languages from '~/data/languages.json';

export default {
  name: 'Page4',
  components: { Interests, Languages, Achievements, PersonalProjects, Certificates },
  data() {
    return {
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
