angular.module('blue_media.register_controller',[
  'blue_media.directives',
  'restangular'
]).
  controller('RegisterCtrl', function($scope, Auth, Restangular, $location){

    $scope.register = function() {

        Restangular.all('users').post($scope.user).then(function(model){
          return $location.path('/');
        }, function(err){
          console.log(err);
        });
    }

  });
