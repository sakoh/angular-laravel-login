angular.module('blue_media.edit_controller', ['restangular']).
  controller('EditCtrl', function($scope, Restangular, $location, $routeParams){
    Restangular.one('users', $routeParams.id).get().then(function(user){
      $scope.user = user;
    });

    $scope.editUser = function(){
      Restangular.one('users', $routeParams.id).then(function(user){
        user.put().$object.then(function(){
          return $location.path('/show/'+$routeParams.id);
        }, function(err){
          console.log(err);
        });
      });
    }
  });
