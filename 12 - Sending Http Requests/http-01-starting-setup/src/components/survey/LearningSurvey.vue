<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput" >One or more input fields are invalid. Please check your provided data.</p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      error: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      // method 1:

      // fetch('https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/surveys.json', {
      //   method: 'POST',  // GET | POST | DELETE | PATCH
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     name: this.enteredName,
      //     rating: this.chosenRating
      //   })
      // })



      // .then(response => {
      //   // if(response.ok){
      //   //   //...
      //   // } else {
      //   //   throw new Error('Could not save data!');
      //   // }
      //   console.log(response)
      //   if(response.status === 200 || response.status === 201){
      //     //...
      //   } else if(response.status === 400 || response.status === 500){
      //     throw new Error('Could not save data!');
      //   }
      // })

      

      // method 2:

      this.error = null;

      const axios = require('axios');

      axios.post('https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/surveys.json', {
        name: this.enteredName,
        rating: this.chosenRating
      }).catch((error) => {
        //console.log(error);
        if(error.response){
          console.log("1")
          throw new Error('Could not save data!');
        } else if(error.request){
          console.log("2")
        } else {
          console.log("3")
          throw new Error('Something went wrong - try again later!');
        }
        //console.log(error.config);
      }).catch((error) => {
        this.error = error.message;
      });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>