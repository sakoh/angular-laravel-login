angular.module('blue_media.change_password_controller',[
'satellizer',
'restangular',
'blue_media.account'
])
.controller('ChangePasswordCtrl', function($scope, Restangular) {
    $scope.changePassword = function() {
      Restangular.one('users', $scope.user.id).then(function() {
        alert('Password has been changed');
      }, function(error) {
        console.log(error);
      })
    }

});
