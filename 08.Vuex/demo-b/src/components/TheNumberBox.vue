<template>
  <h3>{{ result }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['result']),
  },
};
</script>
