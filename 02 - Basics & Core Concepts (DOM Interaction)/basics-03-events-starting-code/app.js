const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(number) {
      this.counter += number
    },
    subtract(number) {
      this.counter -= number
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Submitted!')
    }
  },
});

app.mount('#events');
