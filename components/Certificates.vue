<template>
  <div class="row">
    <div
      class="col-12 col-md-6 certificate"
      v-for="certificate of certificates"
      :key="certificate.title"
    >
      <h6 class="fw-medium title mb-1">{{ certificate.title }}</h6>
      <div class="text-light fw-medium subtitle">
        {{ certificate.organization }} · {{ certificate.date }}
        <template v-if="certificate.link">
          ·
          <a :href="certificate.link" target="_blank">{{ $t('messages.view-certificate') }}</a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Certificates',
  props: {
    certificates: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1.15rem;
}

.certificate {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
}
</style>
