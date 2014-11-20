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

Route::group(array('prefix'=>'api/v1'), function(){


	Route::post('/login', 'AuthController@postLogin');

	Route::post('/admin/login', 'AdminController@postLogin');


	Route::group(array('before' => 'Sentry'),function(){

		Route::resource('/users','UsersController');
		Route::get('logout', 'AuthController@logout');

	});

	Route::group(array('prefix' => 'admin','before' => 'AdminSentry'),function(){

		Route::resource('/users','UsersController');
		Route::get('logout', 'AdminController@logout');

	});

});
