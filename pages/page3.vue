<template>
  <div class="page">
    <section class="py-1">
      <h4 class="section-title mb-2">
        <Icon class="icon" name="el:cogs" />
        <span class="section-title__text">{{ $t('messages.skills') }}</span>
      </h4>
      <Skills :skills="skills" />
    </section>

    <section class="py-1 mt-4">
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
      <Certificates :certificates="certificates" />
    </section>

    <span class="page-number">
      {{ $t('messages.page-number', { current: 3, total: 4 }) }}
    </span>
  </div>
</template>

<script>
import ProgrammingSkills from '~/components/ProgrammingSkills';
import Certificates from '~/components/Certificates';
import Skills from '~/components/Skills';

import programmingSkills from '~~/data/programmingSkills.json';
import certificates from '~/data/certificates.json';

export default {
  name: 'Page3',
  components: { Certificates, ProgrammingSkills, Skills },
  data() {
    return {
      programmingSkills,
      certificates: certificates.slice(0, 10),
    };
  },
  computed: {
    skills() {
      return this.$tm('skills').map(this.$rt)
    }
  },
};
</script>
