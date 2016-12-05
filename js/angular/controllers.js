moviesApp.controller('moviesController', function ($scope, MoviesService) {
  $scope.movies = [];

  // Load movies from the API using our service
  MoviesService.listMovies().then(

    // Success callback
    function (response) {
      $scope.movies = response.data;

      console.log($scope.movies);
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
