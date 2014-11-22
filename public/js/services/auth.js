angular.module('blue_media.auth_services', ['restangular'])
  .constant('AccessLevels', {
    anon: 0,
    user: 1
  }).factory('Auth', function($http, LocalService, AccessLevels, Restangular) {
    return {
      authorize: function(access) {
        if (access === AccessLevels.user) {
          return this.isAuthenticated();
        } else {
          return true;
        }
      },
      isAuthenticated: function() {
        return LocalService.get('auth_token');
      },
      login: function(credentials) {
        var login = $http.post('/auth/authenticate', credentials);
        login.success(function(result) {
          LocalService.set('auth_token', JSON.stringify(result));
        });
        return login;
      },
      logout: function() {
        // The backend doesn't care about logouts, delete the token and you're good to go.
        LocalService.unset('auth_token');
      },
      register: function(formData) {

        LocalService.unset('auth_token');

        var user = Restangular.all('users').post(FormData);

        user.then(function(result) {
          LocalService.set('auth_token', JSON.stringify(result));
        }, function(error) {
          console.log(error);
        });

        return user;

      }

    }

  });
