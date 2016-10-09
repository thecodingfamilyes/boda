<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
	//

	public $fillable = ['question', 'user_id', 'answer', 'answered_at'];

/**
* Get the author that wrote the book.
*/
	public function user()
	{
		return $this->belongsTo(User::class);
	}

}
