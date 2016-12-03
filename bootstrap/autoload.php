<?php

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Register The Composer Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader
| for our application. We just need to utilize it! We'll require it
| into the script here so that we do not have to worry about the
| loading of any our classes "manually". Feels great to relax.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Include The Compiled Class File
|--------------------------------------------------------------------------
|
| To dramatically increase your application's performance, you may use a
| compiled class file which contains all of the classes commonly used
| by a request. The Artisan "optimize" is used to create this file.
|
*/

$compiledPath = __DIR__.'/cache/compiled.php';

if (file_exists($compiledPath)) {
    require $compiledPath;
}

function pr() {
	$args = func_get_args();
	if (count($args) > 1) {
		foreach ($args as $arg) {
			pr($arg);
		}
	}

	echo '<pre>'.print_r($args[0], true).'</pre>';
}

function prd() {
	call_user_func_array('pr', func_get_args());
	die;
}

function is_owner($guard = 'api') {
	$me = Illuminate\Support\Facades\Auth::guard($guard)->user();
	$owner = false;

	if (!empty($me)) {
		$userid = $me->id;

		if (in_array($me->email, ['piticonejo@gmail.com', 'cristina_080692@hotmail.com'])) {
			$owner = true;
		}
	}

	return $owner;
}
