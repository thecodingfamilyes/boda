<?php namespace App\Services;

use Laravel\Socialite\Contracts\User as ProviderUser;
use App\SocialAccount;
use App\User;

class SocialAccountService
{
    public function createOrGetUser(ProviderUser $providerUser, $provider = 'facebook')
    {
        $account = SocialAccount::whereProvider($provider)
            ->whereProviderUserId($providerUser->getId())
            ->first();

        if ($account) {
            return $account->user;
        } else {

            $account = new SocialAccount([
                'provider_user_id' => $providerUser->getId(),
                'provider' => $provider
            ]);

            $user = User::whereEmail($providerUser->getEmail())->first();

            if (!$user) {

                $user = User::create([
                    'email' => $providerUser->getEmail(),
                    'name' => $providerUser->getName(),
                    'password' => uniqid(),
                    'avatar' => $providerUser->getAvatar(),
                    'api_token' => str_random(60)
                ]);
            }

            $account->user()->associate($user);
            $account->save();

            return $user;

        }

    }
}