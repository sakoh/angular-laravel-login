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

	public function signup()
	{
		$input['first_name'] = Input::get('first_name');
		$input['last_name'] = Input::get('last_name');
		$input['email'] = Input::get('email');
		$input['password'] = Input::get('password');

		$rules = array(
				'first_name' => 'required',
				'last_name' => 'required',
				'email' => 'required|email|unique:users,email',
				'password' => 'required|min:8'
		);

		$validator = Validator::make($input, $rules);
		if ($validator->fails()) {
			return Response::json(array('success'=>'false', 'error'=>$validator->messages()), 404);
		}
		else
		{
			$user = Sentry::createUser($input);
			return Response::json(
					array(
							'token' => $this->createToken($user),
							'current_user' => $user
					)
			);
		}
	}

}
