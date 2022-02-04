
const app = Vue.createApp({
    data() {        // Must be setted when create an App
        return {    // Must return an object
            courseGoalA: '<h3>Finish the course and learn Vue!</h3>',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },
})

app.mount('#user-goal');