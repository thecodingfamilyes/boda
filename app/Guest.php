<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    //
    public $guarded = [];

    protected $casts = [
        'data' => 'json'
    ];
}
