angular.module('blue_media.login_controller',[
  'restangular',
  'satellizer',
  'blue_media'
])
.controller('LoginCtrl', function($scope, $auth, Account) {

  $scope.login = function() {

    $auth.login({ email: $scope.user.email, password: $scope.user.password })
    .then(function(response) {
      Account.user = response.data.current_user;
      alert('You have successfully logged in as ' + Account.user.email);
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
