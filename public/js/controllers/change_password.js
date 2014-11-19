angular.module('blue_media.change_password_controller', ['restangular','ngRoute']).
  controller('ChangePasswordCtrl', function($scope, $location, Restangular, $routeParams){


    $scope.errorMessage = '';

    $scope.changePassword = function(){

      if($scope.user.password === $scope.user.passwordConfirm){

        Restangular.one('users', $routeParams.id).get().then(function(user){

          user.password = $scope.user.password;

          user.put().then(function(){
            return $location.path('/');
          });

        });

      } else {
        $scope.errorMessage = 'passwords have to match';
      }

    }

  });
