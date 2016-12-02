movieapp.service('DataServices', function($http) {
    return {
        listMovies: () => $http.get('data/movies.json'),
    };
});
