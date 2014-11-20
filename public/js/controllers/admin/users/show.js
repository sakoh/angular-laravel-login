angular.module('blue_media.admin_user_show_controller', [
    'restangular',
    'ui.router'
]).
  controller('UserShowCtrl', function($scope, Restangular, $stateParams){
    Restangular.one('users', $stateParams.id).get().then(function(user){
      $scope.user = user;
    });
  });
