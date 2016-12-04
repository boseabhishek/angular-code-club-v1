var movieapp = angular.module(
  'movieapp', // Module name
  ['ngRoute', 'ngAnimate'] // Module dependency injection
);

// Single page application routes
movieapp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider

      // Specific basket route
      .when('/basket', {
        templateUrl: 'templates/basket.html'
      })

      // By default, show the movies route
      .otherwise({
        templateUrl: 'templates/home.html'
      });
  }
]);
