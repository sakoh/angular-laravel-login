<?php


use GuzzleHttp\Subscriber\Oauth\Oauth1;

class UsersController extends \BaseController {

	/**
	 * Display a listing of Sentrys
	 *
	 * @return Response
	 */
	public function index()
	{
		$users = Sentry::findAllUsers();

		return Response::json($users);
	}


	/**
	 * Store a newly created User in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		try{
			$data = array();

				$data = array(
						'first_name' => Input::get('first_name'),
						'last_name'  => Input::get('last_name'),
						'email'      => Input::get('email'),
						'password'   => Input::get('password')
				);

				$user = Sentry::createUser($data);
				$token = $this->createToken($user);

				return Response::json(compact('token'));

			}
			catch (Cartalyst\Sentry\Users\UserExistsException $e)
			{
				echo 'User with this login already exists.';
			}

	}


	/**
	 * Display the specified User.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		try{
			$user = Sentry::findUserById($id);

			return Response::json($user);
		}
		catch (Cartalyst\Sentry\Users\UserNotFoundException $e)
		{
			echo 'User was not found.';
		}
	}


	/**
	 * Update the specified User in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		try
		{
			// Find the User using the User id
			$user = Sentry::findUserById($id);

			// Update the User details
			if(Input::get('first_name')) $user->first_name = Input::get('first_name');
			if(Input::get('last_name'))  $user->last_name = Input::get('last_name');
			if(Input::get('email'))      $user->email = Input::get('email');
			if(Input::get('password'))   $user->password = Input::get('password');
			// Update the Sentry
			if ($user->save())
			{
				return Response::json($user);
			}
			else
			{
				echo 'User was not updated';
			}
		}
		catch (Cartalyst\Sentry\Users\UserExistsException $e)
		{
			echo 'User with this login already exists.';
		}
		catch (Cartalyst\Sentry\Users\UsersNotFoundException $e)
		{
			echo 'User was not found.';
		}
	}

	/**
	 * Remove the specified Sentry from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		try
		{
			// Find the Sentry using the Sentry id
			$user = Sentry::findUserById($id);

			// Delete the Sentry
			$user->delete();

			echo 'user was deleted.';
		}
		catch (Cartalyst\Sentry\Users\UsersNotFoundException $e)
		{
			echo 'Sentry was not found.';
		}
	}

}
