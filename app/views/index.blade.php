<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blue Media</title>


    {{ HTML::style('js/libs/bootstrap/dist/css/bootstrap.min.css')}}
    {{ HTML::style('js/libs/sb-admin-2/css/sb-admin-2.css')}}
    {{ HTML::style('js/libs/sb-admin-2/font-awesome-4.1.0/css/font-awesome.min.css')}}
    {{ HTML::style('css/custom.css')}}
    {{ HTML::script('js/libs/jquery/dist/jquery.min.js')}}
    {{ HTML::script('js/libs/bootstrap/dist/js/bootstrap.min.js')}}
    {{ HTML::script('js/libs/sb-admin-2/js/sb-admin-2.js')}}
    {{ HTML::script('js/libs/angular/angular.min.js')}}
    {{ HTML::script('js/libs/ui-router/release/angular-ui-router.min.js')}}
    {{ HTML::script('js/libs/lodash/dist/lodash.min.js')}}
    {{ HTML::script('js/libs/restangular/dist/restangular.min.js')}}
    {{ HTML::script('js/libs/satellizer/satellizer.min.js')}}
    {{ HTML::script('js/controllers/index.js')}}
    {{ HTML::script('js/directives.js')}}
    {{ HTML::script('js/controllers/register.js')}}
    {{ HTML::script('js/controllers/login.js')}}
    {{ HTML::script('js/controllers/admin/users/show.js')}}
    {{ HTML::script('js/controllers/admin/users/create.js')}}
    {{ HTML::script('js/controllers/admin/users/edit.js')}}
    {{ HTML::script('js/controllers/admin/users/change_password.js')}}
    {{ HTML::script('js/controllers.js')}}
    {{ HTML::script('js/app.js')}}

</head>
<body ng-app='blue_media'>
  <div ui-view></div>
</body>
</html>
