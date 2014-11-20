angular.module('blue_media.user_create_controller', ['restangular','ui.router']).
  controller('CreateCtrl', function($scope, $location, Restangular){

    $scope.addUser = function(){


      if($scope.user.password === $scope.user.passwordConfirm){

        Restangular.all('users').post($scope.user).then(function(model){
          return $location.path('/');
        }, function(err){
          console.log(err);
        });

      } else {
        $scope.errorMessage = 'passwords have to match';
      }
    }
  });
