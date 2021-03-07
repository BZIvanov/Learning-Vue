const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  // using computed properties is good for performance, because if we achieve the same with calling methods in the html, the methods we will executed on every render of the html
  computed: {
    fullname() {
      console.log('rendering html');
      if (!this.name) return '';
      return this.name + ' ' + 'Ivanov';
    },
  },
  // with watch we can also achieve performance improvements for specific data values, that is why the watch method name must match the data property
  watch: {
    counter(newValue, prevValue) {
      console.log('prev', prevValue);
      console.log('new', newValue);
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
