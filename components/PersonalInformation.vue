<template>
  <div>
    <h1 class='mb-1'>{{ data.name }}</h1>
    <h6 class='text-primary mb-3 font-weight-normal'>{{ $t(data.title) }}</h6>
    <vue-showdown :markdown='$t(data.bio)' />
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
