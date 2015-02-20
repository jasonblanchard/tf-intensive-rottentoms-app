'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP
  ){
    $stateProvider
      .state('root.signout', {
        url: URLMAP.signout,
        controller: 'SignoutCtrl',
        controllerAs: 'signout',
        publicRoute: false,
        resolve: {
        }
      });
  })
  .controller('SignoutCtrl', function(logout, $state) {
    logout().then(function() {
      $state.go('root.home');
    });
  })
