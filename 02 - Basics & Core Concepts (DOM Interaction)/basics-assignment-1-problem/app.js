const app = Vue.createApp({
    data(){
        return {
            myName: 'Andrea',
            myAge: 26,
            imgLink: 'https://andreacoppetta.it/icon-256.png'
        }
    },
    methods: {
        myFavouriteNumber(){
            const rand = Math.round(Math.random());
            return rand;
        }
    },
})
app.mount('#assignment');