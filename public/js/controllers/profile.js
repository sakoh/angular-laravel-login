angular.module('blue_media.profile_controller',[
  'satellizer',
  'blue_media.account'
])
.controller('ProfileCtrl', function($scope, $auth, Account) {

  /**
  * Get user's profile information.
  */
  $scope.getProfile = function() {
    Account.getProfile()
    .success(function(data) {
      $scope.user = data;
    })
    .error(function(error) {
      console.log(error);
    });
  };


  /**
  * Update user's profile information.
  */
  $scope.updateProfile = function() {
    Account.updateProfile({
      displayName: $scope.user.displayName,
      email: $scope.user.email
    }).then(function() {
      alert('Profile got updated');
    });
  };

  /**
  * Link third-party provider.
  */
  $scope.link = function(provider) {
    $auth.link(provider)
    .then(function() {
      alert('You have successfully linked ' + provider + ' account');
    })
    .then(function() {
      $scope.getProfile();
    })
    .catch(function(response) {
      alert(response.data.message);
    });
  };

  /**
  * Unlink third-party provider.
  */
  $scope.unlink = function(provider) {
    $auth.unlink(provider)
    .then(function() {
      alert('You have successfully unlinked ' + provider + ' account');
    })
    .then(function() {
      $scope.getProfile();
    })
    .catch(function(response) {

      alert(response.data ? response.data.message : 'Could not unlink ' + provider + ' account');

    });
  };

  $scope.getProfile();

});
