angular.module('core')
  .factory('saveSettingsToClient', function(
    Settings,
    settingsGateway
  ){
    return function saveSettingsToClient(settings) {
      return settingsGateway.saveToClient(settings)
    }
  })
