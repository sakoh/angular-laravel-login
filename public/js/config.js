angular.module('blue_media.config', [
  'ui.route',
  'restangular',
  'blue_media.services'
])
  .constant('APP_ROOT', angular.element('#linkAppRoot').attr('href'))
  .config(function ($stateProvider, $httpProvider, $locationProvider, $q, $log, AuthService) {

    RestangularProvider.setBaseUrl('http://localhost/blue_media/public/api/v1');


    var checkLoggedIn = function () {
      var deferred = $q.defer();

      if (!AuthService.isAuthenticated()) {
        $log.log('authentication required. redirect to login');
        deferred.reject({ needsAuthentication: true });
      } else {
        deferred.resolve();
      }

      return deferred.promise;
    };

    $stateProvider.protectedState = function (state, url, template, ctrl) {
      route.resolve = route.resolve || {};
      angular.extend(route.resolve, { isLoggedIn: ['$q', '$log', 'AuthService', checkLoggedIn] });

      return $stateProvider.when(state,{
        url: url,
        controller: ctrl,
        templateUrl: template
      });
    }

    $httpProvider.interceptors.push('processErrorHttpInterceptor');

  })
  .run(function ($location, $rootScope, $log, AuthService, $route) {

    $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
      if (rejection && rejection.needsAuthentication === true) {

        var returnUrl = $location.url();
        $log.log('returnUrl=' + returnUrl);
        $location.path('/login').search({ returnUrl: returnUrl });
      }

    });

  });
