<?php

class AuthController extends \BaseController {

	public function postLogin(){
        $data = [
					"email" => Input::get('email'),
					"password" => Input::get('password')
				];

        $validator = Validator::make($data, User::$auth_rules);
        if ($validator->fails())
        {
            return Response::json($validator->errors);
        }

        if (Auth::attempt(array('email' => Input::get('email'), 'password' => Input::get('password')))){
            return Response::json('authification successful');
        }

        //return Redirect::route('admin.login');
    }

}
