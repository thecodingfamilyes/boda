<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'api'], function () {
	Route::resource('signatures', 'SignaturesController');
	Route::resource('questions', 'QuestionsController');
	Route::post('guests', 'GuestsController@save');
});
