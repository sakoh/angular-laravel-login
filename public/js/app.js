var BlueMedia = angular.module('blue_media', ['ngRoute']);

BlueMedia.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'IndexCtrl', 
        templateUrl:'./templates/index.html'
      });
  });

BlueMedia.controller('IndexCtrl', function($scope){
    $scope.message = 'Hello Angular';
});;

