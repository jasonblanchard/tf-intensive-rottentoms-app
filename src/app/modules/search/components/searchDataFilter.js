'use strict';
var settings;
var movies;
var paginatedMovies;
angular.module('search')
  .factory('searchDataFilter', function(PaginatedMovies, Settings) {
    settings = Settings.data;
    movies = PaginatedMovies.get();
    paginatedMovies = PaginatedMovies;
    function search(searchTerm) {
      if (settings.filterRelevantStarWars === true) {
        if ( /Star Wars/i.test(searchTerm) ){
          var filteredMovies = [];

          for(var i=0; i < movies.length; i++) {
            if (/return of the jedi|empire strikes back|a new hope/i.test(movies[i].title)) {
              filteredMovies.push(movies[i]);
            }
          }

          return paginatedMovies.set(filteredMovies);
        }
      }
    };

    return search
  });
