<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.7rem 1.4rem;
  font: inherit;
  background-color: #3a0161;
  border: 1px solid #3a0161;
  color: white;
  cursor: pointer;
  border-radius: 28px;
  margin-right: 0.4rem;
  display: inline-block;
}
a:hover,
a:active,
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
.outline {
  background-color: transparent;
  border-color: #270141;
  color: #270141;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd3ff;
}
</style>