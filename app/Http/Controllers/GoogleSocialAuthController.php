<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Services\SocialAccountService;
use Socialite;

class GoogleSocialAuthController extends Controller
{
    public function redirect(Request $request)
    {
    	$referer = str_replace(env('APP_URL'), '', \URL::previous());

    	$request->session()->put('backTo', $referer);

    	return Socialite::driver('google')->redirect();
    }

    public function callback(SocialAccountService $service, Request $request)
    {
    	$user = $service->createOrGetUser(Socialite::driver('google')->user(), 'google');

        auth()->login($user);

        return redirect()->to($request->session()->get('backTo', '/'));
    }
}
