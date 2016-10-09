<?php

use App\User;
use App\Question;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ApiListQuestionsTest extends TestCase
{
	use DatabaseMigrations;
	use DatabaseTransactions;

	public function testApiList()
	{
		$user = factory(User::class)->create(['name' => 'user2']);
		$question = factory(Question::class)->make(['question' => 'hola ke ase']);
		$user->questions()->save($question);
		$question = factory(Question::class)->make(['question' => 'hola ke ase 2']);
		$user->questions()->save($question);

		$this->json('GET', '/api/questions')
			 ->seeJson([
					'question' => 'hola ke ase'
				]);
	}

}
