angular.module('movieDetails', [
  'core'
])
.config(function(iocMapProvider) {
  iocMapProvider.map({
    'movieGateway': 'httpMovieGateway'
  })
})
.constant('MOVIEDETAILSURL', 'app/modules/movie_details/')
