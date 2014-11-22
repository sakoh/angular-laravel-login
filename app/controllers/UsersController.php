<?php


use GuzzleHttp\Subscriber\Oauth\Oauth1;

class UsersController extends \BaseController {

	/**
	 * Display a listing of users
	 *
	 * @return Response
	 */
	public function index()
	{
		$users = Sentry::findAllUsers();

		return Response::json($users);
	}



	/**
	 * Store a newly created user in storage.
	 *
	 * @return Response
	 */
	public function store()
	{

			$data = array();

				$data = array(
						'first_name' => Input::get('first_name'),
						'last_name'  => Input::get('last_name'),
						'email'      => Input::get('email'),
						'password'   => Input::get('password'),
						'permissions'=> array(
								'users' => 1,
								'admin' => -1
						),
						'activated' => true
				);

				$user = Sentry::createUser($data);

				return Response::json(array('token' => $this->createToken($user)));

			if(!Input::get('first_name'))
					Response::json(['error' => 'first name is needed'], 500);
			if(!Input::get('last_name'))
					Response::json(['error' => 'last name is needed'], 500);
			if(!Input::get('email'))
					Response::json(['error' => 'email is needed'], 500);
			if(!Input::get('password'))
					Response::json(['error' => 'password is needed'], 500);

	}


	/**
	 * Display the specified user.
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
	 * Update the specified user in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		try
		{
			// Find the user using the user id
			$user = Sentry::findUserById($id);

			// Update the user details
			if(Input::get('first_name')) $user->first_name = Input::get('first_name');
			if(Input::get('last_name'))  $user->last_name = Input::get('last_name');
			if(Input::get('email'))      $user->email = Input::get('email');
			if(Input::get('password'))   $user->password = Input::get('password');
			// Update the user
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
		catch (Cartalyst\Sentry\Users\UserNotFoundException $e)
		{
			echo 'User was not found.';
		}
	}

	/**
	 * Remove the specified user from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		try
		{
			// Find the user using the user id
			$user = Sentry::findUserById($id);

			// Delete the user
			$user->delete();

			echo 'User was deleted.';
		}
		catch (Cartalyst\Sentry\Users\UserNotFoundException $e)
		{
			echo 'User was not found.';
		}
	}

}
