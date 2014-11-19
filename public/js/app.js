angular.module('blue_media', [
		'ui.router',
		'blue_media.controllers'
	])
	.config(function($stateProvider,$urlRouterProvider, RestangularProvider) {


		 	$urlRouterProvider.otherwise("/");

			$stateProvider.
      	state('home', {
					url:'/',
      		controller: 'IndexCtrl',
      		templateUrl:'js/templates/index.html'
    		}).
    		state('user',{
					url: '/user/:id',
    			controller:'ShowCtrl',
    			templateUrl: 'js/templates/show.html'
    		}).
				state('create',{
					url: '/create',
					controller:'CreateCtrl',
					templateUrl: 'js/templates/create.html'
				}).
				state('user.edit',{
					url:'/edit',
					controller:'EditCtrl',
					templateUrl: 'js/templates/edit.html'
				}).
				state('user.edit.change_password',{
					url: '/change_password',
					controller:'ChangePasswordCtrl',
					templateUrl: 'js/templates/change_password.html'
				});

      RestangularProvider.setBaseUrl('http://localhost/blue_media/public/api/v1');

  });
