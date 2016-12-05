moviesApp.controller('moviesController', function ($scope, basketFactory, MoviesService) {
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

  $scope.addMovieToBasket = function (movie) {
    console.log('Adding movie to basket...');
    
    basketFactory.addMovie(movie);
  };
});

moviesApp.controller('basketController', function ($scope, basketFactory) {

  // Initially populate the basket page with the basket contents
  $scope.basket = basketFactory.getMovies();

  // When clicking the remove button, remove the movie from the basket
  $scope.removeMovieFromBasket = function (movie) {
    basketFactory.removeMovie(movie);
  };

  // Calculate the total cost of all the movies in the basket
  $scope.getMoviesTotal = function() {
    var total = 0;

    Object.keys($scope.basket).forEach(function (movieId) {
      total += $scope.basket[movieId].price;
    });

    return total;
  };
});
