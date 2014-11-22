angular.module('blue_media.current_user', ['restangular'])
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
