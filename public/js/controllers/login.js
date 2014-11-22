angular.module('blue_media.login_controller',[
  //'blue_media.services',
  'restangular'
])
.constant('API_URL', 'http://localhost/blue_media/public/api/v1')
.factory('AuthTokenFactory', function ($window, API_URL) {
    'use strict';
    var store = $window.localStorage;
    var key = 'auth-token';

    return {
      getToken: getToken,
      setToken: setToken
    };

    function getToken() {
      return store.getItem(key);
    }

    function setToken(token) {
      if (token) {
        store.setItem(key, token);
      } else {
        store.removeItem(key);
      }
    }

})
.factory('RandomUserFactory', function RandomUserFactory($http, API_URL) {
  'use strict';
  return {
    getUser: getUser
  };

  function getUser() {
    return $http.get(API_URL + '/random-user');
  }
})
.factory('AuthInterceptor', function (AuthTokenFactory) {
  'use strict';
  return {
    request: addToken
  };

  function addToken(config) {
    var token = AuthTokenFactory.getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  }
})
.factory('UserFactory', function UserFactory($http, API_URL, AuthTokenFactory, $q) {
  'use strict';
  return {
    login: login,
    logout: logout,
    getUser: getUser
  };

  function login(username, password) {
    return $http.post(API_URL + '/login', {
      username: username,
      password: password
    }).then(function success(response) {
      AuthTokenFactory.setToken(response.data.token);
      return response;
    });
  }

  function logout() {
    AuthTokenFactory.setToken();
  }

  function getUser() {
    if (AuthTokenFactory.getToken()) {
      return $http.get(API_URL + '/me');
    } else {
      return $q.reject({ data: 'client has no auth token' });
    }
  }
})
.controller('LoginCtrl', function($scope, $http, $location, AuthTokenFactory, API_URL){

      $scope.login = function() {
        return $http.post(API_URL + '/login', {
          email: $scope.user.email,
          password: $scope.user.password
        }).then(function success(response) {
          AuthTokenFactory.setToken(response.data.token);
          return response;
        }).then(function() {
          return $location.path('/');
        });

      };

});
