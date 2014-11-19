<?php

class AdminController extends \BaseController {

  public function postLogin()
  {
    $credentials = array(
      'email' => Input::get('email'),
      'password' => Input::get('password'),
    );
    try{
      $user = Sentry::authenticate($credentials, false);
      if($user)
      {
        return Redirect::to('/admin');
      }
    }

  }

  public function logout()
  {
    Sentry::logout();
    return Redirect::to('/admin');
  }

}
