angular.module('blue_media.change_password_controller', [
  'restangular',
  'ui.router'
]).
  controller('ChangePasswordCtrl', function($scope, $location, Restangular, $stateParams){


    $scope.errorMessage = '';

    $scope.changePassword = function(){

      if($scope.user.password === $scope.user.passwordConfirm){

        Restangular.one('users', $stateParams.id).get().then(function(user){

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
