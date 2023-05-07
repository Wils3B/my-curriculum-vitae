<template>
  <div class="page">
    <section class="py-1">
      <h4 class="section-title mb-2">
        <Icon class="icon" name="eos-icons:software" />
        <span class="section-title__text">{{ $t('messages.programming-skills') }}</span>
      </h4>
      <ProgrammingSkills :skills="programmingSkills" />
    </section>

    <section class="mt-4 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" name="fluent:certificate-24-filled" />
        <span class="section-title__text">{{ $t('messages.online-courses') }}</span>
      </h4>
      <Certificates :certificates="certificates" :display-max-items="7" />
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
      {{ $t('messages.page-number', { current: 3, total: 3 }) }}
    </span>
  </div>
</template>

<script>
import ProgrammingSkills from '~/components/ProgrammingSkills';
import Certificates from '~/components/Certificates';
import Skills from '~/components/Skills';

import programmingSkills from '~~/data/programmingSkills.json';
import certificates from '~/data/certificates.json';
import languages from '~/data/languages.json';

export default {
  name: 'Page3',
  components: { Certificates, ProgrammingSkills, Skills },
  data() {
    return {
      programmingSkills,
      certificates: certificates,
      languages,
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
    transform: translateY(50px);
  }
}
</style>

