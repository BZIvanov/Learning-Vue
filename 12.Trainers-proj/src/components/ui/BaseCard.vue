<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 39rem;
}
</style>