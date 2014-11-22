angular.module('blue_media.register_controller',[
  'blue_media.services'
]).
  controller('RegisterCtrl', function($scope, Auth){

    $scope.register = function() {
      return Auth.register($scope.user).then(function(success) {
        console.log(success);
      }, function(error) {
        console.log(error);
      });
    }

  });
