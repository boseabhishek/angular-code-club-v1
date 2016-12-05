var moviesApp = angular.module(
  'moviesApp', // Module name
  ['ngRoute', 'ngAnimate'] // Module dependency injection
);

// Single page application routes
moviesApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider

      // Specific basket route
      .when('/basket', {
        templateUrl: 'templates/basket.html'
      })

      // By default, show the movies route
      .otherwise({
        templateUrl: 'templates/movies.html'
      });
  }
]);
