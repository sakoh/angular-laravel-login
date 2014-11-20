angular.module('blue_media.services', ['restangular'])
  .factory('AuthService' , function ($rootScope, Restangular) {

    var user = {
      isAuthenticated: false,
      first_name: '',
      last_name: '',
      email: '',
      password: ''
      permissions: {
        admin: -1,
        users: 1
      }
    };

    $rootScope.user = user;


    var AuthService = {

      int: function (isAuthenticated, first_name, last_name, last_name, email, password) {
        user.isAuthenticated = isAuthenticated;
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.password = password;
      },

      isAuthenticated: function () {
        return user.isAuthenticated;
      },

      login: function (loginModel) {

        var loginResult = Restangular.all('users')
              .customPOST(loginModel, 'login');

        loginResult.then(function (result) {
          user.isAuthenticated = result.loginOk;

          if (result.loginOk){

            user.email = loginModel.email;
            user.password = loginModel.password;
          }

        });

        return loginResult;

      },

      logout: function () {

        return Restangular.all('users').customPOST(null, 'logout')
          .then(function (result) {
            user.isAuthenticated = false;
            user.email = '';
            user.password = '';
          });

      },

      register: function (registerModel) {
          return Restangular.all('users').customPOST(registerModel, 'register');
      },

      changePassword: function (changePasswordModel) {
          return Restangular.all('users').customPUT(changePasswordModel, 'changePassword');
      }

    };

    return AuthService;

  });
