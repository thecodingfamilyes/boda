<?php
use App\Transformers\UsersTransformer;

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

function loadHome() {
	$me = Auth::user();

	if (!is_null($me)) {
		$transformer = new UsersTransformer();
		$me = json_encode($transformer->transform($me), JSON_NUMERIC_CHECK);
	} else {
		$me = 'null';
	}

    return view('home')->with('me', $me);
}

Route::get('/', function () {
	return loadHome();
});

Route::get('/redirect', 'SocialAuthController@redirect');
Route::get('/callback', 'SocialAuthController@callback');
Auth::routes();

Route::get('/logout', function() {
	auth()->logout();

	return redirect()->to('/');
});

Route::get('/{page}', function () {
	return loadHome();
});
