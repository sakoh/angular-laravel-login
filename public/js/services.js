angular.module('blue_media.services', ['restangular'])
  .constant('AccessLevels', {
    anon: 0,
    user: 1
  })
  .factory('Auth', function($http, LocalService, AccessLevels) {
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
        var register = $http.post('/auth/register', formData);
        register.success(function(result) {
          LocalService.set('auth_token', JSON.stringify(result));
        });
        return register;
      }
    }
  })
  .factory('AuthInterceptor', function($q, $injector) {
    var LocalService = $injector.get('LocalService');

    return {
      request: function(config) {
        var token;
        if (LocalService.get('auth_token')) {
          token = angular.fromJson(LocalService.get('auth_token')).token;
        }
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      responseError: function(response) {
        if (response.status === 401 || response.status === 403) {
          LocalService.unset('auth_token');
          $injector.get('$state').go('anon.login');
        }
        return $q.reject(response);
      }
    }
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  })

  .factory('CurrentUser', function(LocalService) {
    return {
      user: function() {
        if (LocalService.get('auth_token')) {
          return angular.fromJson(LocalService.get('auth_token')).user;
        } else {
          return {};
        }
      }
    };
  })

  .factory('LocalService', function() {
    return {
      get: function(key) {
        return localStorage.getItem(key);
      },
      set: function(key, val) {
        return localStorage.setItem(key, val);
      },
      unset: function(key) {
        return localStorage.removeItem(key);
      }
    }
  })
  .factory('Messages', function($http, CurrentUser) {
    var currentUser = CurrentUser.user;
    return {
      getAll: function() {
        return $http.get('/user/' + currentUser().id + '/messages');
      },
      create: function(message) {
        return $http.post('/user/' + currentUser().id + '/messages', {body: message});
      },
      remove: function(message) {
        return $http.delete('/user/' + currentUser().id + '/messages/' + message.id);
      }
    }
  });
