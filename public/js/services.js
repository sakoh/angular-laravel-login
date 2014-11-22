angular.module('blue_media.services', [
  'restangular',
  'blue_media.local_service',
  'blue_media.auth_services',
  'blue_media.auth_intercepter',
  'blue_media.current_user',
  'blue_media.messages'
]).
  config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });
