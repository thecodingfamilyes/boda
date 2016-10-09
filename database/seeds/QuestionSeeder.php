<?php

use Illuminate\Database\Seeder;
use App\Question;
use App\User;

class QuestionSeeder extends Seeder
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
			$question = factory(Question::class)->make();
			$user->questions()->save($question);
		}
	}
}
