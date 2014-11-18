angular.module('blue_media', ['restangular','ngRoute'])
	.config(function($routeProvider, RestangularProvider) {
    	$routeProvider.
      		when('/', {
        		controller: 'IndexCtrl', 
        		templateUrl:'./templates/index.html'
      		}).
      		when('/:id',{
      			controller:'ShowCtrl',
      			templateUrl: './templates/show.html'
      		});

      	RestangularProvider.setBaseUrl('http://localhost/blue_media/public/api/v1');

  	}).
  	controller('IndexCtrl',function($scope, Restangular){
    	Restangular.all('users').getList().then(function(users){
    		$scope.users = users;
    	});
	}).
	controller('ShowCtrl', function($scope, Restangular, $routeParams){
		Restangular.one('users', $routeParams.id).get().then(function(user){
			$scope.user = user;
		});
	});

