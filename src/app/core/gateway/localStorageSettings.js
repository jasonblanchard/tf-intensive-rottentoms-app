angular.module('core')
  .constant('USER_KEY', 'localStorageUser')
  .factory('lsSettingsGateway', function(
    $q,
    $localStorage,
    USER_KEY
  ){
    return {

      saveToClient: function(settings) {
        return $q(function(resolve, reject) {
          $localStorage[USER_KEY + '-settings'] = settings;
          resolve();
        });
      },

      getFromClient: function() {
        return $q(function(resolve, reject) {
          resolve($localStorage[USER_KEY + '-settings']);
        });
      },

      removeFromClient: function() {
        return $q(function(resolve, reject) {
          resolve(delete $localStorage[USER_KEY + '-settings']);
        });
      }
    }
  })
