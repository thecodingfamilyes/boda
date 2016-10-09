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

if (!function_exists('loadHome')) {
	function loadHome() {
		$me = Auth::user();

		if (!is_null($me)) {
			$transformer = new UsersTransformer();
			$token = $me->api_token;
			$me = json_encode(array_merge($transformer->transform($me), compact('token')), JSON_NUMERIC_CHECK);
		} else {
			$me = 'null';
		}

		return view('home')->with('me', $me);
	}
}

Route::get('/', function () {
	return loadHome();
});

Route::get('/redirect', 'SocialAuthController@redirect');
Route::get('/callback', 'SocialAuthController@callback');

Route::get('/google/redirect', 'GoogleSocialAuthController@redirect');
Route::get('/google/callback', 'GoogleSocialAuthController@callback');

Auth::routes();

Route::get('/logout', function() {
	auth()->logout();

	return Redirect::back();
});

Route::get('/{page}', function () {
	return loadHome();
});
