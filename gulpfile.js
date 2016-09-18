const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.css.autoprefix = {
	options: {
		cascade: true,
		browsers: ['last 2 versions', '> 1%']
	}
};


elixir(mix => {
	mix.sass('app.scss')
	   .webpack('app.jsx');

	mix.phpUnit();

//	mix.version(['css/app.css', 'js/app.js']);
});
