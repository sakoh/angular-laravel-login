angular.module('blue_media.create_controller', ['restangular']).
  controller('CreateCtrl', function($scope, $location, Restangular){

    /*$scope.user = {
      first_name :"",
      last_name:"",
      email: "",
      password: "",
      passwordConfirm: ""
    };*/


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
