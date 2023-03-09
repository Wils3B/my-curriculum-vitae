<template>
  <div class="negative-margins sm-text text-center">
    <div class="contacts pb-0">
      <Contact v-for="contact in contacts.slice(0, 3)" :contact="contact" :key="contact.key" class='col-12 col-md-4' />
    </div>
    <div class="contacts pt-0">
      <Contact v-for="contact in contacts.slice(3)" :contact="contact" :key="contact.key" class='col-12 col-md-4' />
    </div>
  </div>
</template>

<script>
import Contact from '~/components/Contact';

export default {
  name: 'Contacts',
  components: { Contact },
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources.scss';

.contacts {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 1.6rem;
  flex-flow: row wrap;
}

.negative-margins {
  margin: 0 -3rem;
  background-color: rgba($light, 0.1);
}

.text-black {
  color: #000;
}
</style>
