movieapp.controller('homeController', function($scope, DataServices) {
    DataServices.listMovies().then((response) => {
        $scope.movies = response.data;
    });
});

movieapp.controller('basketController', function($scope, DataServices) {

});