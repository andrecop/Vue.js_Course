const app = Vue.createApp({
    data(){
        return {
            inputTask: '',
            tasks: [],
            showTaskList: true
        }
    },
    computed: {
        buttonCaption() {
            return this.showTaskList ? 'Hide' : 'Show'
        }
    },
    methods: {
        addTask(){
            if(this.inputTask != ''){
                this.tasks.push(this.inputTask);
                this.inputTask = '';
            }
        },
        removeTask(idx){
            this.tasks.splice(idx, 1)
        },
        showList(){
            this.showTaskList = !this.showTaskList
        }
    },
});

app.mount('#assignment');