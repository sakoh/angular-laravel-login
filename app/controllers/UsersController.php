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
		$Sentrys = Sentry::findAllUsers();

		return Response::json($Sentrys);
	}


	/**
	 * Store a newly created Sentry in storage.
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
						'password'   => Input::get('password')
				);

				$Sentry = Sentry::createSentry($data);
				$token = $this->createToken($Sentry);

				return Response::json(compact('token'));
	}


	/**
	 * Display the specified Sentry.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		try{
			$Sentry = Sentry::findUserById($id);

			return Response::json($Sentry);
		}
		catch (Cartalyst\Sentry\Sentrys\SentryNotFoundException $e)
		{
			echo 'Sentry was not found.';
		}
	}


	/**
	 * Update the specified Sentry in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		try
		{
			// Find the Sentry using the Sentry id
			$Sentry = Sentry::findUserById($id);

			// Update the Sentry details
			if(Input::get('first_name')) $Sentry->first_name = Input::get('first_name');
			if(Input::get('last_name'))  $Sentry->last_name = Input::get('last_name');
			if(Input::get('email'))      $Sentry->email = Input::get('email');
			if(Input::get('password'))   $Sentry->password = Input::get('password');
			// Update the Sentry
			if ($Sentry->save())
			{
				return Response::json($Sentry);
			}
			else
			{
				echo 'Sentry was not updated';
			}
		}
		catch (Cartalyst\Sentry\Sentrys\SentryExistsException $e)
		{
			echo 'Sentry with this login already exists.';
		}
		catch (Cartalyst\Sentry\Sentrys\SentryNotFoundException $e)
		{
			echo 'Sentry was not found.';
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
			$Sentry = Sentry::findUserById($id);

			// Delete the Sentry
			$Sentry->delete();

			echo 'Sentry was deleted.';
		}
		catch (Cartalyst\Sentry\Sentrys\SentryNotFoundException $e)
		{
			echo 'Sentry was not found.';
		}
	}

	public function getUser()
	{
		$token = explode(' ', Request::header('Authorization'))[1];
		$payloadObject = JWT::decode($token, Config::get('secrets.TOKEN_SECRET'));
		$payload = json_decode(json_encode($payloadObject), true);
		$Sentry = Sentry::findUserById($payload['sub']);
		return $Sentry;
	}

	public function updateUser()
	{
		$token = explode(' ', Request::header('Authorization'))[1];
		$payloadObject = JWT::decode($token, Config::get('secrets.TOKEN_SECRET'));
		$payload = json_decode(json_encode($payloadObject), true);
		$Sentry = Sentry::findUserById($payload['sub']);
		$Sentry->displayName = Input::get('displayName', $Sentry->displayName);
		$Sentry->email = Input::get('email', $Sentry->email);
		$Sentry->save();
		$token = $this->createToken($Sentry);
		return Response::json(array('token' => $token));
	}

}
