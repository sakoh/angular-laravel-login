<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Laravel PHP Framework</title>

		<?php echo HTML::script('js/libs/angular/angular.min.js') ?>
</head>
<body ng-app>
	 <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
</body>
</html>
