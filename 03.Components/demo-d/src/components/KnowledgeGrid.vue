<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :title="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics'],
};
</script>
