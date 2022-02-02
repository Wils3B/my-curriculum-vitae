<template>
  <div class='negative-margins'>
    <div class='contacts sm-text'>
      <div v-for='contact in contacts' :key='contact.key'>
        <Icon :icon='contact.icon' class='text-primary' />
        <a v-if='contact.link' :href='contact.link' target='_blank' class='text-black'>{{ $t(contact.value) }}</a>
        <span v-else>{{ $t(contact.value) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
  name: 'Contacts',
  components: { Icon },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.contacts {
  background-color: rgba($primary, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 1.6rem;
}

.negative-margins {
  margin: 0 -3rem;
}

.text-black {
  color: #000;
}
</style>
