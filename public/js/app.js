angular.module('blue_media', [
		'ui.router',
		'restangular',
		'blue_media.controllers'
	])
	.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

			RestangularProvider.setBaseUrl('http://localhost/blue_media/public/api/v1');
		 	$urlRouterProvider.otherwise("/");

			$stateProvider.
				state('home',{
					url:'/',
					controller:'IndexCtrl',
					templateUrl:'js/templates/index.html'
				}).
				state('home.register',{
					url: 'register',
					controller: 'RegisterCtrl',
					templateUrl:'js/templates/register.html'
				}).
				state('home.login',{
					url:'login',
					controller: 'LoginCtrl',
					templateUrl: 'js/templates/login.html'
				})/*
      	protectedState('admin', {
					url:'admin',
      		templateUrl:'js/templates/admin/index.html',
					controller: function(){},

    		}); /*.
				state('admin.login',{
					url: 'admin/login',
					controller:'AdminLoginCtrl',
					templateUrl:'js/templates/admin/login.html'
				}).
    		state('admin.user',{
					url: '/user/:id',
    			controller:'ShowCtrl',
    			templateUrl: 'js/templates/admin/user/show.html'
    		}).
				state('admin.user.create',{
					url: '/create',
					controller:'CreateCtrl',
					templateUrl: 'js/templates/admin/user/create.html'
				}).
				state('admin.user.edit',{
					url:'/edit',
					controller:'EditCtrl',
					templateUrl: 'js/templates/admin/user/edit.html'
				}).
				state('admin.user.edit.change_password',{
					url: '/change_password',
					controller:'ChangePasswordCtrl',
					templateUrl: 'js/templates/admin/user/change_password.html'
				});*/

  });
