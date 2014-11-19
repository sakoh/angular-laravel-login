<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		$permissions = array('Administrator', 'User');

		foreach(range(1, 10) as $index)
		{
			Sentry::createUser(array(
				'first_name'=> $faker->firstName(),
				'last_name' => $faker->lastName(),
				'email'     => $faker->email(),
				'password'  => 'password',
				'permissions' => array(
					'admin' => rand(-1,1),
					'users' => rand(-1,1),
				),
				'activated' => true,
			));
		}
	}

}
