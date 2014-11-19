<?php

class AuthController extends \BaseController {

	public function postLogin()
	{
		$credentials = array(
			'email' => Input::get('email'),
			'password' => Input::get('password'),
		);
		try{
			$user = Sentry::authenticate($credentials);
			if($user)
			{
				return Redirect::to('/');
			}
		}

		catch(\LoginRequiredException $e){
			echo 'you have to logged in';
		}
	}

	public function logout()
	{
		Sentry::logout();
		return Redirect::to('/');
	}

}
