<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
	//
/**
* Get the author that wrote the book.
*/
	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
