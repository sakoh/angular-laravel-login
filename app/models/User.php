<?php

class User extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		 'name' => 'required',
		 'email' => 'required',
		 'password' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['name','email','password'];

}
