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

Route::get('/', array('before' => 'Sentry', function()
{
	return View::make('index');
}));

Route::post('/login', 'AuthController@postLogin');

Route::get('/login',function(){
	return View::make('login');
});

Route::group(array('prefix'=>'api/v1', 'before' => 'Sentry'), function(){
	Route::resource('/users','UsersController');
});
