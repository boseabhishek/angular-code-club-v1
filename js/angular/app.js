var movieapp = angular.module('movieapp', ['ngRoute', 'ngAnimate']);
movieapp.config(
  ['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/basket', {
          templateUrl: 'templates/basket.html',
          controller: 'basketController'
        })
        .otherwise({
          templateUrl: 'templates/home.html',
          controller: 'homeController'
        });
    }
  ]
);
