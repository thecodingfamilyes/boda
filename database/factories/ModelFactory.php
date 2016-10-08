<?php

use App\User;
use App\Signature;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;
    $mail = $faker->safeEmail;
    return [
        'name' => $faker->name,
        'email' => $mail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'avatar' => 'https://www.gravatar.com/avatar/'.md5($mail).'?d=monsterid',
        'api_token' => str_random(60)
    ];
});

/**
 * Signatures factory
 */
$factory->define(App\Signature::class, function (Faker\Generator $faker) {

    return [
        'body' => implode("\n", $faker->paragraphs(rand(1, 10)))
    ];
});
