// createApp takes an object as configuration, where the keys are important, for example data is function which returns object with the data we want to work with
const app = Vue.createApp({
  data() {
    return {
      firstGoal: 'Complete course',
      secondGoal: 'Get certificate',
      docsLink: 'https://v3.vuejs.org/',
      someHtml: '<em>Text with html</em>',
    };
  },
  // all keys in the object for methods must be functions, because methods are the behaviour we will use
  methods: {
    outputGoal() {
      const isVueNice = Math.random();
      if (isVueNice > 0.5) {
        return 'Yes ' + this.firstGoal;
      }
      return 'Sure ' + this.secondGoal;
    },
  },
});

// this is how we select, which part of the html should be controlled by vue
// if we use Vue syntax outside of the element with id user-goal, Vue will of course do nothing with it
app.mount('#user-goal');
