<template>
  <div class="background">
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  min-height: 100vh;
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  background-color: $primary-light;
}

.content {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

@media print {
  .background {
    background-color: transparent;
    padding: 0;
    display: block;
  }

  .content {
    box-shadow: none !important;
    // transform: scale(1.8);
  }
}
</style>
