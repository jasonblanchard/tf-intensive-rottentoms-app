angular.module('core', [
    'ngCookies',
    'ngTouch',
    'ngAnimate',
    'ngSanitize',
    'angular-loading-bar'
  ])
  .constant('COREURL', 'app/core/')
  .config(function(iocMapProvider, cfpLoadingBarProvider){
    iocMapProvider.map({
      'userGateway': 'lsUserGateway',
      'settingsGateway': 'lsSettingsGateway'
    })
    cfpLoadingBarProvider.includeSpinner = false;
  });
