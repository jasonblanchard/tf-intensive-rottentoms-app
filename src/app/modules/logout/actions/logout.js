angular.module('logout')
  .factory('logout', function(
    User,
    userGateway
  ){
    return function() {
      User.set({isLoggedIn: false});
      return userGateway.removeFromClient();
    }
  })
