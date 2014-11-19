<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::group(array('before' => 'Sentry'),function(){

	Route::get('/', function()
	{
		return View::make('index');
	});

	Route::get('logout', 'AuthController@logout');
});

Route::group(array('prefix' => 'admin','before' => 'AdminSentry'),function(){


	$user = Sentry::getUser();

	//if (!$user->hasAccess('admin')) return Redirect::to('/');

	Route::get('/', function()
	{
		return View::make('admin/index');
	});

	Route::get('logout', 'AdminController@logout');

});


Route::post('/login', 'AuthController@postLogin');

Route::get('/login',function(){
	return View::make('login');
});


Route::post('/admin/login', 'AdminController@postLogin');

Route::get('/admin/login',function(){
	return View::make('admin/login');
});


Route::group(array('prefix'=>'api/v1', 'before' => 'Sentry'), function(){
	Route::resource('/users','UsersController');
});
