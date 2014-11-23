angular.module('blue_media.register_controller',[
  'blue_media.directives',
  'restangular',
  'satellizer'
]).
  controller('RegisterCtrl', function($scope, Restangular, $location, $auth){

    $scope.register = function() {

        Restangular.all('users').post($scope.user).then(function(model){
          $auth.login({
            email: $scope.user.email,
            password: $scope.user.password
          }).then(function() {
            return $location.path('/');
          });
        }, function(err){
          alert(err);
        });
    }

  });
