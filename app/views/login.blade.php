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

<div class="col-md-4 col-md-offset-4" style="padding-top: 20px;">
  <div class="panel panel-info">
    <div class="panel-heading">Please Login</div>
    <div class="panel-body">
      {{ Form::open(array('url' => 'login', 'method' => 'POST')) }}
      @if($errors->has('login'))
      <div class="alert alert-danger">
        <a href="#" class="close" data-dismiss="alert">&times;</a>
        {{ $errors->first('login', ':message') }}
      </div>
      @endif
      <div class="form-group">
        {{ Form::label('email', 'Email Address') }}
        {{ Form::text('email', '', array('class' => 'form-control', 'placeholder' => 'Email Address')) }}
      </div>
      <div class="form-group">
        {{ Form::label('password', 'Password') }}
        {{ Form::password('password', array('class' => 'form-control', 'placeholder' => 'Password')) }}
      </div>
      <div class="form-group">
        {{ Form::submit('Login', array('class' => 'btn btn-success')) }}
        {{ HTML::link('/', 'Cancel', array('class' => 'btn btn-danger')) }}
      </div>
      {{ Form::close() }}
    </div>
  </div>
</div>
