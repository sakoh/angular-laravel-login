angular.module('blue_media.account',[
  'satellizer',
  'restangular'
])
.factory('Account', function($http, $auth, API_URL, Restangular) {

  return {
    user: {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    },
    getProfile: function() {
      return this.user;
    },
    updateProfile: function(profileData) {
      Restangular.one('users', profileData.id).get().then(function(user){
        user.first_name = profileData.first_name;
        user.last_name = profileData.last_name;
        user.email = profileData.email;

        user.put().then(function(){
          return alert('Profile edited');
        }, function (error) {
          alert(error);
        });
      });
    }
  }
});
