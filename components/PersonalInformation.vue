<template>
  <div class='row'>
    <div class='col-12 col-md-9'>
      <h1 class="mb-1">{{ data.name }}</h1>
      <h6 class="text-primary mb-3 font-weight-normal">{{ $t(data.title) }}</h6>
      <vue-showdown :markdown="$t(data.bio)" />
    </div>
    <div class='col-12 col-md-3 d-flex align-items-center'>
      <img alt="Wilson Gouanet" src='~/assets/images/profile.jpg' class='img-fluid'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInformation',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
