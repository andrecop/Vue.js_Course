const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      goals: [],
      objects: {name: 'Andrea', age: 26}
    };
  },
  methods: {
    addGoal(){
      if(this.enteredGoal != ''){
        this.goals.push(this.enteredGoal);
        this.enteredGoal = '';
      }
    },
    removeGoal(idx){
      this.goals.splice(idx, 1);
    }
  },
});

app.mount('#user-goals');
