<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ddd;
  color: #bbb;
  border-radius: 28px;
  padding: 0.5rem 1.4rem;
  display: inline-block;
  margin-right: 0.4rem;
}
.frontend {
  background-color: #3d018d;
  color: white;
}
.backend {
  background-color: #71018d;
  color: white;
}
.career {
  background-color: #8d016e;
  color: white;
}
</style>