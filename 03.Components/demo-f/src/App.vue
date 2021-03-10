<template>
  <div>
    <user-info
      :full-name="user.name"
      :info-text="user.description"
      :role="user.role"
    ></user-info>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </course-goals>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    UserInfo,
    CourseGoals,
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
