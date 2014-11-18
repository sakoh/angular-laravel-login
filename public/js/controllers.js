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

    $scope.user = {name :"", email: "", password: ""};

    $scope.addUser = function(){

      Restangular.all('users').post($scope.user).then(function(model){
        return $location.path('/');
      }, function(err){
        console.log(err);
      });
    }
  }).
  controller('EditCtrl', function($scope, Restangular, $routeParams){
    Restangular.one('users', $routeParams.id).get().then(function(user){
      $scope.user = user;
    });

    $scope.editUser = function(){

    }
  });
