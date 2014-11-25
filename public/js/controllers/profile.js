angular.module('blue_media.profile_controller',[
  'satellizer',
  'restangular',
  'blue_media.account'
])
.controller('ProfileCtrl', function($scope, $auth, Account, Restangular) {

  /**
  * Get user's profile information.
  */
  $scope.getProfile = function() {
    $scope.user = Account.getProfile();
  };


  /**
  * Update user's profile information.
  */
  $scope.updateProfile = function() {
    return Account.updateProfile($scope.user)
  }

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
