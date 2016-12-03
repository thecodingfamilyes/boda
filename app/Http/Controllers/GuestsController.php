<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Guest;

class GuestsController extends Controller
{
    public function save(Request $request, Guest $guest)
    {
        $data = $request->all();
        $created = Guest::create(compact('data'));

        return $created->toJSON();
    }
}
