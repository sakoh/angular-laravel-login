<?php

use GuzzleHttp\Subscriber\Oauth\Oauth1;

class AuthController extends \BaseController {

	public function unlink($provider)
	{

		$user = Sentry::findUserById(Request::get('id'));

		if (!$user)
		{
			Response::json(array('message' => 'User not found'));
		}

		unset($user->$provider);

		$user->save();

		return Response::json(array('token' => $this->createToken($user)));
	}

	public function login()
	{

		$email = Input::get('email');

		$password = Input::get('password');

		$user = Sentry::findUserByLogin($email);

		if (!$user)
		{

			return Response::json(array('message' => 'Wrong email and/or password'), 401);

		}

		if (Hash::check($password, $user->password))
		{

			// The passwords match...
			unset($user->password);
					return Response::json(
							array(
									'token' => $this->createToken($user),
									'current_user' => $user
							)
					);

		}

		else
		{

			return Response::json(array('message' => 'Wrong email and/or password'), 401);

		}

	}
}
