<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Petko Petrov', role: 'Engineer' },
        { id: 'u2', fullName: 'Mira Ivanova', role: 'Engineer' },
        { id: 'u3', fullName: 'Boqn Trifonov', role: 'Engineer' },
        { id: 'u4', fullName: 'Magdalena Berova', role: 'Consultant' },
        { id: 'u5', fullName: 'Ivan Ivanov', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>
