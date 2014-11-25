angular.module('blue_media.account',[
  'satellizer',
  'restangular'
])
.factory('Account', function($http, $auth, API_URL, Restangular) {

  return {
    getProfile: function() {
        return this.user ? this.user : this.user = {
          first_name: localStorage.getItem('first_name'),
          last_name: localStorage.getItem('last_name'),
          email: localStorage.getItem('email')
        }
    },
    updateProfile: function(profileData) {


      localStorage.setItem('first_name', profileData.first_name);
      localStorage.setItem('last_name', profileData.last_name);
      localStorage.setItem('email', profileData.email);

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
