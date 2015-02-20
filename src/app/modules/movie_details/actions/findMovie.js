angular.module('movieDetails')
  .factory('findMovie', function(
    movieGateway,
    Movie
  ){
    return function(id) {
      return movieGateway.show(id)
        .then(function(response) {
          Movie.set(response.data)
        });
    }
  });
