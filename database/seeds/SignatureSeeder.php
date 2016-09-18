<?php

use Illuminate\Database\Seeder;
use App\Signature;
use App\User;

class SignatureSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		User::unguard();
		$users = User::all();

		for ($i=0; $i < 120; $i++) {
			$user = $users[rand(0, 9)];
			$signature = factory(Signature::class)->make();
			$user->signatures()->save($signature);
		}
	}
}
