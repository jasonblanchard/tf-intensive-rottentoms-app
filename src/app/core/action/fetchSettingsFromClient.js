angular.module('core')
  .factory('fetchSettingsFromClient', function(
    Settings,
    settingsGateway
  ){
    return function fetchSettingsFromClient() {
      return settingsGateway.getFromClient()
        .then(function(settings) {
          if (settings != null) {
            Settings.set(settings);
          }
        });
    }
  })
