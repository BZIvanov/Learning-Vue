<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <h2>Default Text</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // we will receive the slots in the component in variable $slots, which is object with keys the names of the slots and key default for the default slot
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 32rem;
  border-radius: 8px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  padding: 1rem;
}
</style>
