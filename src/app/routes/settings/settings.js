'use strict';
angular.module('routes')
  .config(function(
    $stateProvider,
    URLMAP,
    ROUTESURL
  ){
    $stateProvider
      .state('root.settings', {
        url: URLMAP.settings,
        templateUrl: ROUTESURL + 'settings/settings.tmpl.html',
        controllerAs: 'settings',
        controller: 'SettingsCtrl',
        resolve: {}
      });
  })
  .controller('SettingsCtrl', function(
    $scope,
    Settings,
    saveSettingsToClient
  ){
    var vm = this;
    vm.settings = Settings.data;
    vm.savedStatus = {saved: false};
    vm.submitSettings = function() {
      saveSettingsToClient(vm.settings);
      vm.savedStatus.saved = true;
    }
  })
