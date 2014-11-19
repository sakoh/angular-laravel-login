angular.module('blue_media', [
		'ngRoute',
		'blue_media.directives',
		'blue_media.controllers'
	])
	.config(function($routeProvider, RestangularProvider) {
    	$routeProvider.
      	when('/', {
      		controller: 'IndexCtrl',
      		templateUrl:'js/templates/index.html'
    		}).
    		when('/show/:id',{
    			controller:'ShowCtrl',
    			templateUrl: 'js/templates/show.html'
    		}).
				when('/create',{
					controller:'CreateCtrl',
					templateUrl: 'js/templates/create.html'
				}).
				when('/edit/:id',{
					controller:'EditCtrl',
					templateUrl: 'js/templates/edit.html'
				}).
				when('/change_password/:id',{
					controller:'ChangePasswordCtrl',
					templateUrl: 'js/templates/change_password.html'
				});;

      RestangularProvider.setBaseUrl('http://localhost/blue_media/public/api/v1');

  });
