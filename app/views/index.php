<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>

		<?php

			echo HTML::style('js/libs/bootstrap/dist/css/bootstrap.min.css');
			echo HTML::script('js/libs/jquery/dist/jquery.min.js');
			echo HTML::script('js/libs/bootstrap/dist/js/bootstrap.min.js');
			echo HTML::script('js/libs/angular/angular.min.js');
			echo HTML::script('js/libs/angular-route/angular-route.min.js');
			echo HTML::script('js/libs/lodash/dist/lodash.min.js');
			echo HTML::script('js/libs/restangular/dist/restangular.min.js');
			echo HTML::script('js/directives.js');
			echo HTML::script('js/controllers/index.js');
			echo HTML::script('js/controllers/show.js');
			echo HTML::script('js/controllers/create.js');
			echo HTML::script('js/controllers/edit.js');
			echo HTML::script('js/controllers.js');
			echo HTML::script('js/app.js');
		?>
</head>
<body ng-app="blue_media">
			
      <div ng-view></div>
</body>
</html>
