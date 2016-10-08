<?php namespace App\Transformers;

use App\Signature;
use League\Fractal\TransformerAbstract;

/**
 * Signatures api transformer
 */
class SignaturesTransformer extends TransformerAbstract
{

	protected $availableIncludes = ['author'];

	public function transform(Signature $signature) {

		return [
			'id' => $signature->id,
			'body' => $signature->body,
			'user_id' => $signature->user_id,
			'owner' => is_owner(),
			'created_at' => date('c', strtotime($signature->created_at))
		];
	}

	public function includeAuthor(Signature $signature) {
		$author = $signature->user;

		return $this->item($author, new UsersTransformer);
	}
}
