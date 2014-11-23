angular.module('blue_media.index_controller', [
  'restangular',
  'satellizer'
]).
  controller('IndexCtrl',function($scope, $auth){
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.logout = function() {
      $auth.logout();
    }
  });
