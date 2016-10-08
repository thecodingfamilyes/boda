<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
	//

	public $fillable = ['body', 'user_id'];

/**
* Get the author that wrote the book.
*/
	public function user()
	{
		return $this->belongsTo(User::class);
	}

}
