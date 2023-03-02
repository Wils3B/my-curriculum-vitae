<template>
  <div class="contact">
    <Icon :icon="contact.icon" class="text-primary" />
    <a v-if="contact.link" :href="contact.link" target="_blank" class="text-black">
      {{ $t(contact.value) }}
    </a>
    <span v-else>{{ $t(contact.value) }}</span>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
  name: 'Contact',
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  components: { Icon },
};
</script>

<style scoped>
.contact {
  padding: 0.4rem 0.4rem;
}
</style>
