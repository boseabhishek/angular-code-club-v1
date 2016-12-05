// Service for getting the list of movies from our API
moviesApp.service('MoviesService', function ($http) {
  this.listMovies = function () {
    return $http.get('http://178.62.0.124/movies.json');
  };
});
