<?php namespace App\Transformers;

use App\User;
use League\Fractal\TransformerAbstract;

/**
 * Users api transformer
 */
class UsersTransformer extends TransformerAbstract
{
	public function transform(User $user) {
		return [
			'id' => $user->id,
			'name' => $user->name,
			'avatar' => $user->avatar,
			'created_at' => date('c', strtotime($user->created_at))
		];
	}
}
