<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

require_once 'api.php';

Route::get('/', function () {
	$me = Auth::user();

	if (!is_null($me)) {
		$me = $me->toJSON();
	} else {
		$me = 'null';
	}

    return view('home')->with('me', $me);
});

Route::get('/redirect', 'SocialAuthController@redirect');
Route::get('/callback', 'SocialAuthController@callback');

Route::get('/{page}', function () {
	$me = Auth::user();

	if (!is_null($me)) {
		$me = $me->toJSON();
	} else {
		$me = 'null';
	}

    return view('home')->with('me', $me);
});


Auth::routes();

