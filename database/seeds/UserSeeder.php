<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		User::unguard();
		for ($i=0; $i < 10; $i++) {
			$user = factory(User::class)->create();
		}
	}
}
