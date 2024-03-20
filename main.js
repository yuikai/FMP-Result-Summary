const app = new Vue({
  el: '#app',

  data: {
    score: [
      80, 92, 61, 72
    ],
  },
  computed: {
    average() {
      var result = 0;
      for (var i = 0; i < this.score.length; i++ ) {
        result += this.score[i];
      }

      return Math.round( result / 4 );
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
});