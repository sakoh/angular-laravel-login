angular.module('blue_media.login_controller',[
  'restangular',
  'satellizer'
])
.controller('LoginCtrl', function($scope, $alert, $auth) {

  $scope.login = function() {

    $auth.login({ email: $scope.user.email, password: $scope.user.password })
    .then(function() {
      $alert({
        content: 'You have successfully logged in',
        animation: 'fadeZoomFadeDown',
        type: 'material',
        duration: 3
      });
    })
    .catch(function(response) {
      $alert({
        content: response.data.message,
        animation: 'fadeZoomFadeDown',
        type: 'material',
        duration: 3
      });
    });

  };

  $scope.authenticate = function(provider) {

    $auth.authenticate(provider)
    .then(function() {
      $alert({
        content: 'You have successfully logged in',
        animation: 'fadeZoomFadeDown',
        type: 'material',
        duration: 3
      });
    })
    .catch(function(response) {
      $alert({
        content: response.data.message,
        animation: 'fadeZoomFadeDown',
        type: 'material',
        duration: 3
      });
    });

  };

});
