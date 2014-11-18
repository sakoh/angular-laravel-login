<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>

		<?php 
			echo HTML::script('js/libs/angular/angular.min.js');
			echo HTML::script('js/libs/angular-route/angular-route.min.js');
			echo HTML::script('js/libs/lodash/dist/lodash.min.js');
			echo HTML::script('js/libs/restangular/dist/restangular.min.js');
			echo HTML::script('js/app.js'); 
		?>
</head>
<body ng-app="blue_media">
      <div ng-view></div>
</body>
</html>
