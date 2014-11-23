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

Route::get('/', function(){
	return View::make('index');
});

Route::get('api/me', array('before' => 'auth', 'uses' => 'UserController@getUser'));
Route::put('api/me', array('before' => 'auth', 'uses' => 'UserController@updateUser'));


Route::group(array('prefix'=>'api/v1'), function(){

	Route::post('auth/login', 'AuthController@login');

	Route::post('/admin/login', 'AdminController@postLogin');

	Route::resource('/users','UsersController');

	Route::group(array('before' => 'Sentry'), function(){

		Route::get('logout', 'AuthController@logout');

	});

	Route::group(array('prefix' => 'admin','before' => 'AdminSentry'),function(){

		Route::get('logout', 'AdminController@logout');

	});

});
