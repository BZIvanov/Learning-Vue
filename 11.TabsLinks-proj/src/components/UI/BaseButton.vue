<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.7rem 1rem;
  font-family: inherit;
  background-color: #3a0161;
  border: 1px solid #3a0161;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270141;
  border-color: #270141;
}

.flat {
  background-color: transparent;
  color: #3a0161;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2fe;
}
</style>
