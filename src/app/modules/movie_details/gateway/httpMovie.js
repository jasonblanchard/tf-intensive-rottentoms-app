angular.module('search')
  .factory('httpMovieGateway', function(
    httpGateway
  ){
    return {
      show: function(id, params) {
        return httpGateway.jsonp('movies/' + id + '.json', _.defaults({}, params, {}))
      }
    }
  })
