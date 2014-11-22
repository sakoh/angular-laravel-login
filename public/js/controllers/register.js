angular.module('blue_media.register_controller',[
  //'blue_media.services'
  'restangular'
]).
  controller('RegisterCtrl', function($scope, Auth, Restangular, $location){

    $scope.register = function() {
      if($scope.user.password === $scope.passwordConfirm){

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
