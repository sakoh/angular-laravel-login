angular.module('blue_media.create_controller', ['restangular']).
  controller('CreateCtrl', function($scope, $location, Restangular){

    $scope.user = {name :"", email: "", password: ""};

    $scope.addUser = function(){

      Restangular.all('users').post($scope.user).then(function(model){
        return $location.path('/');
      }, function(err){
        console.log(err);
      });
    }
  });
