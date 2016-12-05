// Factory for storing and modifying what is in the basket
moviesApp.factory('basketFactory', function () {

  // Starting basket contents - empty
  var movies = {};

  return {

    // List all movies stored in the basket
    getMovies: function () {
      return movies;
    },

    // Add a movie to the basket
    addMovie: function (movie) {
      movies[movie.id] = movie;

      console.log('Added "' + movie.title + '" to basket.');
      console.log(movies);
    },

    // Remove a movie from the basket
    removeMovie: function (movie) {
      delete movies[movie.id];
    }
  };
});
