<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  props: ['type', 'caption'],
  computed: {
    classes() {
      return {
        'badge--admin': this.type === 'admin',
        'badge--author': this.type === 'author',
      };
    },
  },
};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: #bbb;
  color: #aaa;
}

.badge--admin {
  background-color: #810037;
  color: white;
}

.badge--author {
  background-color: #012c8a;
  color: white;
}
</style>
