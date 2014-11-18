angular.module('blue_media', ['restangular','ngRoute','blue_media.controllers'])
	.config(function($routeProvider, RestangularProvider) {
    	$routeProvider.
      	when('/', {
      		controller: 'IndexCtrl',
      		templateUrl:'./templates/index.html'
    		}).
    		when('/show/:id',{
    			controller:'ShowCtrl',
    			templateUrl: './templates/show.html'
    		}).
				when('/create',{
					controller:'CreateCtrl',
					templateUrl: './templates/create.html'
				}).
				when('/edit/:id',{
					controller:'EditCtrl',
					templateUrl: './templates/edit.html'
				});

      RestangularProvider.setBaseUrl('http://localhost/blue_media/public/api/v1');

  });
