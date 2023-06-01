<template>
  <div class="row">
    <div
      class="col-12 col-md-6 certificate"
      v-for="certificate of displayedCertificates"
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
    <div v-if="displayMaxItems && certificates.length > displayMaxItems" class="col-12 col-md-6 text-center">
      <span class="text-primary display-4 font-weight-bolder">+{{ certificates.length - displayMaxItems }}</span>
      <br />
      {{ $t('messages.more-certificates') }}
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
    displayMaxItems: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    displayedCertificates() {
      if (this.displayMaxItems > 0) return this.certificates.slice(0, this.displayMaxItems);
      return this.certificates;
    }
  }
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
