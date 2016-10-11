<!DOCTYPE html>
<html>
<head>
	<title>Mis papis se casan</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Search engines -->
	<meta name="description" content="Hola, soy Perlita y he hecho una página para contaros unas cosillas">
	<!-- Google Plus -->
	<!-- Update your html tag to include the itemscope and itemtype attributes. -->
	<!-- html itemscope itemtype="http://schema.org/{CONTENT_TYPE}" -->
	<meta itemprop="name" content="Mis papis se casan">
	<meta itemprop="description" content="Hola, soy Perlita y he hecho una página para contaros unas cosillas">
	<meta itemprop="image" content="https://mispapissecasan.com/img/thumb_perlita.jpg">
	<!-- Twitter -->
	<meta name="twitter:card" content="Hola, soy Perlita y he hecho una página para contaros unas cosillas">
	<meta name="twitter:site" content="">
	<meta name="twitter:title" content="Mis papis se casan">
	<meta name="twitter:description" content="Hola, soy Perlita y he hecho una página para contaros unas cosillas">
	<meta name="twitter:creator" content="@algm85">
	<meta name="twitter:image:src" content="https://mispapissecasan.com/img/thumb_perlita.jpg">
	<meta name="twitter:player" content="">
	<!-- Open Graph General (Facebook & Pinterest) -->
	<meta property="og:url" content="https://mispapissecasan.com/">
	<meta property="og:title" content="Mis papis se casan">
	<meta property="og:description" content="Hola, soy Perlita y he hecho una página para contaros unas cosillas">
	<meta property="og:site_name" content="Mis papis se casan">
	<meta property="og:image" content="https://mispapissecasan.com/img/thumb_perlita.jpg">
	<meta property="fb:admins" content="">
	<meta property="fb:app_id" content="">
	<meta property="og:type" content="">
	<meta property="og:locale" content="es_ES">
	<meta property="og:audio" content="">
	<meta property="og:video" content="">

	<link rel="stylesheet" href="{{ elixir("css/app.css") }}">
	<link rel="stylesheet" href="{{ elixir("css/animate.min.css") }}">

</head>
<body>
	<div id="root" class="ui main-ui">
	  <div class="ui active inverted dimmer">
	    <div class="ui huge text loader">Cargando...</div>
	  </div>
	</div>

	<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit" async defer></script>
	<script type="text/javascript">
		var CURRENT_USER = (function(){
			return {!! $me !!};
		})();
	</script>
	<script src="/js/lib/device.js"></script>
	<script src="{{ elixir("js/app.js") }}"></script>
</body>
</html>