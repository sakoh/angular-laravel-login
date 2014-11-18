angular.module('blue_media.controllers', ['restangular','ngRoute']).
  controller('IndexCtrl',function($scope, Restangular){
    Restangular.all('users').getList().then(function(users){
      $scope.users = users;
    });
  }).
  controller('ShowCtrl', function($scope, Restangular, $routeParams){
    Restangular.one('users', $routeParams.id).get().then(function(user){
      $scope.user = user;
    });
  }).
  controller('CreateCtrl', function($scope, $location, Restangular){
    $scope.addUser = function(){
      var user = {
        name: $scope.name,
        email: $scope.email,
        password: $scope.password
      };

      Restangular.all().post('users', user).success(function(model){
        return $location.path('#/');
      });
    }
  });
