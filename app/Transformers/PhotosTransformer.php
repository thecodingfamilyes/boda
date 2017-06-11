<?php namespace App\Transformers;

use App\Signature;
use League\Fractal\TransformerAbstract;

/**
 * Signatures api transformer
 */
class PhotosTransformer extends TransformerAbstract
{

	protected $availableIncludes = ['author'];

	public function transform($photo) {
		$filename = last(explode('/', $photo));

		return [
			'thumbnail' => $photo,
			'original' => 'large/' . $filename
		];
	}
}
