angular.module('blue_media.login_controller',[
  'restangular',
  'satellizer'
])
.controller('LoginCtrl', function($scope, $auth) {

  $scope.login = function() {

    $auth.login({ email: $scope.user.email, password: $scope.user.password })
    .then(function() {
      alert('You have successfully logged in');
    }, errorHandler);

  };

  $scope.authenticate = function(provider) {

    $auth.authenticate(provider)
    .then(function() {
      alert('You have successfully logged in');
    }, errorHandler);

  };

  function errorHandler (error) {
    console.log(error);
  }

});
