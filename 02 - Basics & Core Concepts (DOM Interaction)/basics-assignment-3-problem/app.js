const app = Vue.createApp({
    data() {
        return {
            valueResult: 0,
            result: "Not there yet",
            timer: null
        }
    },
    computed: {
        resultFun() {
            if (this.valueResult < 37) {
                return "Not there yet"
            } else if (this.valueResult === 37) {
                return this.valueResult
            } else {
                return "Too much!"
            }
        }
    },
    watch: {
        valueResult() {
            // if (value < 37) {
            //     this.result = "Not there yet";
            // } else if (value === 37) {
            //     this.result = value;
            // } else {
            //     this.result = "Too much!";
            // }
            clearTimeout(this.timer);
            const that = this;
            this.timer = setTimeout(function () {
                that.valueResult = 0;
                that.result = "Not there yet!";
            }, 2000)
        }
    },
    methods: {
        addValue(value){
            this.valueResult += value
            console.log(this.valueResult)
        }
    },
});

app.mount('#assignment');