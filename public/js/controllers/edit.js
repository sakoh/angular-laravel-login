angular.module('blue_media.edit_controller', ['restangular','ngRoute']).
  controller('EditCtrl', function($scope, Restangular, $location, $routeParams){

    Restangular.one('users', $routeParams.id).get().then(function(user){
      $scope.user = user;
    });

    $scope.editUser = function(){

      Restangular.one('users', $routeParams.id).get().then(function(user){
        user.first_name = $scope.user.first_name;
        user.last_name = $scope.user.last_name;
        user.email = $scope.user.email;

        user.put().then(function(){
          return $location.path('show/' + $routeParams.id);
        });
      });

    }

    $scope.deleteUser = function(){
      Restangular.one('users', $routeParams.id).get().then(function(user){
        user.remove().then(function(){
          return $location.path('/');
        });
      });
    }

  });
