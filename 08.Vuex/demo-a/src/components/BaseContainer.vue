<template>
  <section>
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
section {
  max-width: 31rem;
  margin: 2rem auto;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>
