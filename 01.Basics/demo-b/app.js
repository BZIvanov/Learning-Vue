const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    remove() {
      this.counter = this.counter - 1;
    },
    setFirstName(event) {
      this.firstName = event.target.value;
    },
    setLastName(event, lName) {
      this.lastName = lName;
    },
    submitForm(event) {
      console.log('Submitted.');
    },
  },
});

app.mount('#events');
