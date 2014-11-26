angular.module('blue_media.register_controller',[
  'blue_media.directives',
  'restangular',
  'satellizer',
  'blue_media.account'
]).
  controller('RegisterCtrl', function($scope, Restangular, $location, $auth, Account){

    $scope.register = function() {

      Restangular.all('users').post($scope.user).then(function(model){
        $auth.login({ email: $scope.user.email, password: $scope.user.password })
        .then(function(response) {
          Account.user = response.data.current_user;
          localStorage.setItem('first_name', Account.user.first_name);
          localStorage.setItem('last_name', Account.user.last_name);
          localStorage.setItem('email', Account.user.email);
          alert('You have successfully logged in as ' + Account.user.email);
        });
      }, function(){
        console.log(err);
      });
    }

  });
