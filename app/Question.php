<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
	//

	public $fillable = ['body', 'user_id', 'answer'];

/**
* Get the author that wrote the book.
*/
	public function user()
	{
		return $this->belongsTo(User::class);
	}

}
