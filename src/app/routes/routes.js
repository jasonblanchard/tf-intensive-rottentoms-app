'use strict';
angular.module('routes', [
  'core',
  'modules',
  'ui.router'
]).constant('ROUTESURL', 'app/routes/')
  .constant('URLMAP', { // make sure they have a leading slash
    'home'  : '/',
    'search': '/search',
    'signin': '/login',
    'signout': '/signout',
    'movieDetails':'/:id/details',
    'settings':'/settings'
  })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.hashPrefix('!');
    $stateProvider
      .state('root', {
        abstract: true,
        template: '<ui-view></ui-view>'
      })
    $urlRouterProvider.otherwise('/');
  })
  .factory('globalResolve', function($q, fetchUserFromClient, fetchSettingsFromClient){
    // invoke the promises straight away, only happens once per page load
    //  i.e. doesn't happen after each route change
    return $q.all([fetchUserFromClient(), fetchSettingsFromClient()])
  })
  .run(function($rootScope, $stateParams){
    $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, fromState, fromParams, error){
        console.error(error)
      });
  })
