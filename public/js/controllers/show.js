angular.module('blue_media.show_controller', ['restangular']).
  controller('ShowCtrl', function($scope, Restangular, $routeParams){
    Restangular.one('users', $routeParams.id).get().then(function(user){
      $scope.user = user;
    });
  });
