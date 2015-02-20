angular.module('movieDetails')
  .factory('Movie', function(BaseEntity){
    var Movie = BaseEntity.extend({
    });

    return new Movie();
  });
