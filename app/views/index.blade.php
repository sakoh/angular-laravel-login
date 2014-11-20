<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blue Media</title>

  <?php
    echo HTML::style('js/libs/bootstrap/dist/css/bootstrap.min.css');
    echo HTML::style('js/libs/sb-admin-2/css/sb-admin-2.css');
    echo HTML::style('js/libs/sb-admin-2/font-awesome-4.1.0/css/font-awesome.min.css');
    echo HTML::style('css/custom.css');
    echo HTML::script('js/libs/jquery/dist/jquery.min.js');
    echo HTML::script('js/libs/bootstrap/dist/js/bootstrap.min.js');
    echo HTML::script('js/libs/sb-admin-2/js/sb-admin-2.js');
    echo HTML::script('js/libs/angular/angular.min.js');
    echo HTML::script('js/libs/ui-router/release/angular-ui-router.min.js');
    echo HTML::script('js/libs/lodash/dist/lodash.min.js');
    echo HTML::script('js/libs/restangular/dist/restangular.min.js');
    echo HTML::script('js/services.js');
    echo HTML::script('js/controllers/index.js');
    echo HTML::script('js/controllers/register.js');
    echo HTML::script('js/controllers/admin/users/show.js');
    echo HTML::script('js/controllers/admin/users/create.js');
    echo HTML::script('js/controllers/admin/users/edit.js');
    echo HTML::script('js/controllers/admin/users/change_password.js');
    echo HTML::script('js/controllers.js');
    echo HTML::script('js/app.js');
  ?>
</head>
<body ng-app='blue_media'>
  <div ui-view></div>
</body>
</html>
