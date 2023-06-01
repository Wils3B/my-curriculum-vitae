<template>
  <div class="contact">
    <Icon :name="contact.icon" class="text-primary mr-2 contact-icon" />
    <a v-if="contact.link" :href="contact.link" target="_blank" class="text-black">
      {{ $t(contact.value) }}
    </a>
    <span v-else>{{ $t(contact.value) }}</span>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 0.4rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon {
  font-size: 1.5rem;
}
</style>
