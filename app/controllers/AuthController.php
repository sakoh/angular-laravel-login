<?php

class AuthController extends \BaseController {

	public function postLogin()
	{
		$credentials = Input::only('email', 'password');

		if ( ! $token = JWTAuth::attempt($credentials) )
		{
			// return 401 error response
			return Response::json(['error' => 'Incorrect email or password'],401);
		}

		return Response::json([ 'userToken' => $token ]);
	}

}
