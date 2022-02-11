<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some survey results first.</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true

      // method 1:

      // fetch('https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
      //   .then(function (response) {
      //     if(response.ok){
      //       return response.json();
      //     }
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //   });


      // method 2:

      const axios = require('axios');

      axios.get('https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
        // .then(function (response) {
        .then((response) => {
          if(response.status === 200 || response.status === 201){
            return response.data;
          }
        })
        // .then(function (data) {
        .then((data) => {
          // console.log(data);
          this.isLoading = false;
          const results = [];
          for(const id in data){
            results.push({ id: id, name: data[id].name, rating: data[id].rating })
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later.'
        });
    }
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>