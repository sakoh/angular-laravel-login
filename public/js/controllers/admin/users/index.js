angular.module('blue_media.admin_user_index_controller', ['restangular']).
  controller('UserIndexCtrl',function($scope, Restangular){
    Restangular.all('users').getList().then(function(users){
      $scope.users = users;
    });
  });
