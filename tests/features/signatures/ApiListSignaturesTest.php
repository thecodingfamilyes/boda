<?php

use App\User;
use App\Signature;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ApiListSignaturesTest extends TestCase
{
	use DatabaseMigrations;

	public function testApiList()
	{
		$user = factory(User::class)->create(['name' => 'user1']);
		$signature = factory(Signature::class)->make(['body' => 'hola ke ase']);
		$user->signatures()->save($signature);
		$signature = factory(Signature::class)->make(['body' => 'hola ke ase 2']);
		$user->signatures()->save($signature);

		$this->json('GET', '/api/signatures')
			 ->seeJson([
					'body' => 'hola ke ase'
				]);
	}

}
