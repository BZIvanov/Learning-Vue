<template>
  <ul>
    <li v-for="item in items" :key="item">
      <!-- we can provide parameters to slots like below -->
      <slot :item="item" another-prop="xxx"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ['First', 'Second'],
    };
  },
};
</script>
