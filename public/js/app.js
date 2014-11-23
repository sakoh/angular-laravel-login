angular.module('blue_media', [
		'ui.router',
		'restangular',
		'satellizer',
		'blue_media.controllers'
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
