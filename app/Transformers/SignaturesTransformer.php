<?php namespace App\Transformers;

use App\Signature;
use League\Fractal\TransformerAbstract;

/**
 * Signatures api transformer
 */
class SignaturesTransformer extends TransformerAbstract
{

	public function transform(Signature $signature) {
		return [
			'id' => $signature->id,
			'body' => $signature->body,
			'user_id' => $signature->id,
			'created_at' => date('c', strtotime($signature->created_at))
		];
	}
}