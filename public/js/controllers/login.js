angular.module('blue_media.login_controller',[
  'restangular',
  'satellizer'
])
.controller('LoginCtrl', function($scope, $auth) {

  $scope.login = function() {

    $auth.login({ email: $scope.user.email, password: $scope.user.password })
    .then(function(user) {
      current_user = user;
      alert('You have successfully logged in as ' + current_user.email);
    }).catch(errorHandler);

  };

  $scope.authenticate = function(provider) {

    $auth.authenticate(provider)
    .then(function(user) {
      $scope.current_user = user;
      alert('You have successfully logged in as ' + $scope.current_user.email);
    }).catch(errorHandler);

  };

  function errorHandler (response) {
    alert(response.data.message);
  }

});
