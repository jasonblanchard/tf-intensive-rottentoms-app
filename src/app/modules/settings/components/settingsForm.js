'use strict';
angular.module('settings')
  .directive('settingsForm', function(
    formBuilder,
    SETTINGSURL
  ) {
    return formBuilder({
      templateUrl: SETTINGSURL + 'components/form.tmpl.html',
      formName: 'settingsForm'
    });
  });
