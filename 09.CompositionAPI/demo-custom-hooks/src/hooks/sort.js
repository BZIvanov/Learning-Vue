import { ref, computed } from 'vue';

export default function useSort(availableItems, key) {
  const sorting = ref(null);

  const displayedUsers = computed(function() {
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((a, b) => {
      if (sorting.value === 'asc' && a[key] > b[key]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && a[key] > b[key]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }

  return {
    sorting,
    displayedUsers,
    sort,
  };
}
