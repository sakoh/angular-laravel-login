angular.module('blue_media.user_edit_controller', [
  'restangular',
  'ui.router'
]).
  controller('UserEditCtrl', function($scope, Restangular, $location, $stateParams){

    Restangular.one('users', $stateParams.id).get().then(function(user){
      $scope.user = user;
    });

    $scope.editUser = function(){

      Restangular.one('users', $stateParams.id).get().then(function(user){
        user.first_name = $scope.user.first_name;
        user.last_name = $scope.user.last_name;
        user.email = $scope.user.email;

        user.put().then(function(){
          return $location.path('show/' + $stateParams.id);
        });
      });

    }

    $scope.deleteUser = function(){
      Restangular.one('users', $stateParams.id).get().then(function(user){
        user.remove().then(function(){
          return $location.path('/');
        });
      });
    }

  });
