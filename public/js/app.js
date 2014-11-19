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
    		state('show',{
					url: '/show/:id',
    			controller:'ShowCtrl',
    			templateUrl: 'js/templates/show.html'
    		}).
				state('create',{
					url: '/create',
					controller:'CreateCtrl',
					templateUrl: 'js/templates/create.html'
				}).
				state('edit',{
					url:'/edit/:id',
					controller:'EditCtrl',
					templateUrl: 'js/templates/edit.html'
				}).
				state('change_password',{
					url: '/change_password/:id',
					controller:'ChangePasswordCtrl',
					templateUrl: 'js/templates/change_password.html'
				});

      RestangularProvider.setBaseUrl('http://localhost/blue_media/public/api/v1');

  });
