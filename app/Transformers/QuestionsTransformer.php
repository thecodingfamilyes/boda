<?php namespace App\Transformers;

use App\Question;
use League\Fractal\TransformerAbstract;

/**
 * Questions api transformer
 */
class QuestionsTransformer extends TransformerAbstract
{

	protected $availableIncludes = ['author'];

	public function transform(Question $question) {
		return [
			'id' => $question->id,
			'question' => $question->question,
			'answer' => $question->answer,
			'user_id' => $question->user_id,
			'answered_at' => $question->answered_at,
			'owner' => is_owner(),
			'created_at' => date('c', strtotime($question->created_at))
		];
	}

	public function includeAuthor(Question $question) {
		$author = $question->user;

		return $this->item($author, new UsersTransformer);
	}
}
