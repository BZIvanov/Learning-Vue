<template>
  <div>
    <!-- or we could use as below, below line is alternative syntax for the above line -->
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info
      :full-name="user.name"
      :info-text="user.description"
      :role="user.role"
    ></user-info>
  </div>
</template>

<script>
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  // this is how we register components locally, BadgeList will be still mapped to badge-list in the template
  components: {
    BadgeList,
    UserInfo,
  },
  data() {
    return {
      user: {
        name: 'Tihomir Petrov',
        description: 'Some cool random person',
        role: 'admin',
      },
    };
  },
};
</script>
