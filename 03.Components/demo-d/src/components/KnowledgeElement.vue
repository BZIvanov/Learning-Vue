<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Select</button>
  </li>
</template>

<script>
export default {
  // with inject we can get data or functions from provide property from components up in tree structure
  inject: ['selectTopic'],
  props: ['id', 'title', 'description'],
  emits: ['select-topic'],
};
</script>
