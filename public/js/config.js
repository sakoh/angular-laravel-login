angular.module('blue_media.config', [
  'ui.router',
  'restangular',
  'satellizer'
])
.constant('API_URL', 'http://localhost/blue_media/public/api/v1')
.config(function($stateProvider, $urlRouterProvider, RestangularProvider, API_URL, $authProvider) {

  RestangularProvider.setBaseUrl(API_URL);
  $urlRouterProvider.otherwise("/");

  $authProvider.loginOnSignup = true;
  $authProvider.loginRedirect = API_URL + '/';
  $authProvider.logoutRedirect = API_URL + '/';
  $authProvider.signupRedirect = API_URL + '/login';
  $authProvider.loginUrl = API_URL + '/auth/login';
  $authProvider.signupUrl = API_URL + '/auth/signup';
  $authProvider.loginRoute = API_URL + '/login';
  $authProvider.signupRoute = API_URL + '/signup';
  $authProvider.tokenName = 'token';
  $authProvider.tokenPrefix = 'satellizer'; // Local Storage name prefix
  $authProvider.unlinkUrl = '/auth/unlink/';
  $authProvider.authHeader = 'Authorization';

});
