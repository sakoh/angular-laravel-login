angular.module('blue_media.edit_controller', ['restangular','ngRoute']).
  controller('EditCtrl', function($scope, Restangular, $location, $routeParams){

    Restangular.one('users', $routeParams.id).get().then(function(user){
      $scope.user = user;
    });

    $scope.editUser = function(){

      Restangular.one('users', $routeParams.id).get().then(function(user){
        user.name = $scope.user.name;
        user.email = $scope.user.email;
        user.password = $scope.user.password;

        user.put().then(function(){
          return $location.path('show/' + $routeParams.id);
        });
      });

    }

  });
