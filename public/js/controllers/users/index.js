angular.module('blue_media.user_index_controller', ['restangular']).
  controller('IndexCtrl',function($scope, Restangular){
    Restangular.all('users').getList().then(function(users){
      $scope.users = users;
    });
  });
