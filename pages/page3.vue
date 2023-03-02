<template>
  <div class="page">
    <section class="py-1">
      <h4 class="section-title mb-2">
        <Icon class="icon" :icon="icons.cogsIcon" />
        <span class="section-title__text">{{ $t('messages.skills') }}</span>
      </h4>
      <Skills :skills="$t('skills')" />
    </section>

    <section class="py-1 mt-4">
      <h4 class="section-title mb-2">
        <Icon class="icon" :icon="icons.softwareIcon" />
        <span class="section-title__text">{{ $t('messages.programming-skills') }}</span>
      </h4>
      <ProgrammingSkills :skills="programmingSkills" />
    </section>

    <section class="mt-4 py-1">
      <h4 class="section-title mb-3">
        <Icon class="icon" :icon="icons.certificate24Filled" />
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
import emailIcon from '@iconify/icons-mdi/email';
import schoolIcon from '@iconify/icons-mdi/school';
import { Icon } from '@iconify/vue2';
import softwareIcon from '@iconify/icons-eos-icons/software';
import certificate24Filled from '@iconify/icons-fluent/certificate-24-filled';
import ProgrammingSkills from '~/components/ProgrammingSkills';
import Certificates from '~/components/Certificates';
import Skills from '~/components/Skills';

import programmingSkills from '~/data/programmingSkills';

const certificates = require('~/data/certificates.json');

export default {
  name: 'Page3',
  components: { Certificates, ProgrammingSkills, Icon, Skills },
  data() {
    return {
      programmingSkills,
      icons: { emailIcon, schoolIcon, softwareIcon, certificate24Filled },
      certificates: certificates.slice(0, 10),
    };
  },
};
</script>
