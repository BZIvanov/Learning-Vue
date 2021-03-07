const app = Vue.createApp({
  data() {
    return {
      first: false,
      second: false,
      third: false,
    };
  },
  methods: {
    selectDiv(div) {
      if (div === 'A') {
        this.first = !this.first;
      } else if (div === 'B') {
        this.second = !this.second;
      } else if (div === 'C') {
        this.third = !this.third;
      }
    },
  },
});

app.mount('#styling');
