moviesApp.controller('moviesController', function (MoviesService) {
  var movies = [];

  // Load movies from the API using our service
  MoviesService.listMovies().then(

    // Success callback
    function (response) {
      movies = response.data;

      console.log(movies);
      alert(movies.length + ' movies loaded from the API.');
    },

    // Error callback
    function () {
      alert('Failed to load movies from the API.');
    }
  );
});

moviesApp.controller('basketController', function () {
  alert('Hello basket controller!');
});
