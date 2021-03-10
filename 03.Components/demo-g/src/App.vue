<template>
  <div>
    <button @click="setSelectedComponent('active-items')">Active Items</button>
    <button @click="setSelectedComponent('manage-items')">Manage Items</button>
    <!-- keep-alive is built in component with which we can keep the state of a component if it is dismounted, for example the input value for one of this components -->
    <!-- component allows us to render dynamically/conditionally different components -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import ActiveItems from './components/ActiveItems.vue';
import ManageItems from './components/ManageItems.vue';

export default {
  components: {
    ActiveItems,
    ManageItems,
  },
  data() {
    return {
      selectedComponent: 'active-items',
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>
