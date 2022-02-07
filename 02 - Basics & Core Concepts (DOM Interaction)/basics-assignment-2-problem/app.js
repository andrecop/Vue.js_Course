const app = Vue.createApp({
    data(){
        return {
            inputText1: "OUTPUT",
            inputText2: "OUTPUT",
            inputText2Output: "OUTPUT"
        }
    },
    methods: {
        clickButton(){
            alert("Alert Test")
        },
        getInput1(event){
            this.inputText1 = event.target.value
        },
        getInput2(event){
            this.inputText2 = event.target.value
        },
        setInput2(){
            this.inputText2Output = this.inputText2
        }
    },
})

app.mount('#assignment')