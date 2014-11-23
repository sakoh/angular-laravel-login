angular.module('blue_media.account',[
  'satellizer'
])
.factory('Account', function($http, $auth, API_URL) {
  return {
    getProfile: function() {
      return $http.get(API_URL + '/me');
    },
    updateProfile: function(profileData) {
      return $http.put(API_URL + '/api/me', profileData);
    }
  };
});
