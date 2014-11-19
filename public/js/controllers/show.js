angular.module('blue_media.show_controller', ['restangular', 'ui.router']).
  controller('ShowCtrl', function($scope, Restangular, $stateParams){
    Restangular.one('users', $stateParams.id).get().then(function(user){
      $scope.user = user;
    });
  });
