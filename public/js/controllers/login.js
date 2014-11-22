angular.module('blue_media.login_controller',[
  'restangular',
  'satellizer'
])
.controller('LoginCtrl', function($scope, $auth) {

  $scope.login = function() {

    $auth.login({ email: $scope.user.email, password: $scope.user.password })
    .success(function() {
      alert('You have successfully logged in');
    })
    .error(function(response) {
      alert(response.data.message);
    });

  };

  $scope.authenticate = function(provider) {

    $auth.authenticate(provider)
    .success(function() {

      alert('You have successfully logged in');
    })
    .error(function(response) {

      alert(response.data.message);
    });

  };

});
