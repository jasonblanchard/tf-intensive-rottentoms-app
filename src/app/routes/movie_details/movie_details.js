'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP,
    ROUTESURL
  ){
    $stateProvider
      .state('root.movieDetails', {
        url: URLMAP.movieDetails,
        templateUrl: ROUTESURL + 'movie_details/movie_details.tmpl.html',
        controllerAs: 'movieDetails',
        controller: 'MovieDetailsCtrl',
        resolve: { },
      });
  })
  .controller('MovieDetailsCtrl', function($scope, $stateParams, Movie, findMovie) {
    var vm = this;
    vm.result = Movie;
    vm.movie = vm.result.data;
    findMovie($stateParams.id);
  })
