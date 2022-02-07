const app = Vue.createApp({
    data(){
        return {
            inputClass: '',
            inputStyle: '',
            paragraphVisible: true
        }
    },
    computed: {
        getMyClass() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            };
        }
    },
    methods: {
        // writeClass(event){
        //     this.inputClass = event.target.value;
        // },
        // writeStyle(event){
        //     this.inputStyle = event.target.value;
        // },
        toggleParagraph(){
            this.paragraphVisible = !this.paragraphVisible;
        }
    },
});

app.mount('#assignment');