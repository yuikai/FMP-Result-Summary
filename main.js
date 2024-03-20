const app = new Vue({
  el: '#app',

  data: {
    score: [],
  },
  computed: {
    average() {
      var result = 0;
      for (var i = 0; i < this.score.length; i++ ) {
        result += this.score[i];
      }

      return result / 4;
    },
    grade() {
      if ( this.average === 100 ) {
        return 'Perfect!';
      } else if ( this.average >= 70 ) {
        return 'Great';
      } else if ( this.average >= 50 ) {
        return 'Good';
      } else if ( this.average >= 20 ) {
        return 'Nice Try';
      } else if ( this.average >= 0 ) {
        return 'Try Harder Next Time';
      }
    },
    ranking() {
      return '65%';
    },
  },

  methods: {
    fetchData() {
      // Fetch data from JSON file using fetch API
      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          // Assign fetched data to the 'score' property
          this.score = data.score;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },

  created() {
    this.fetchData();
  }
});