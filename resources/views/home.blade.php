<!DOCTYPE html>
<html>
<head>
	<title>Mis papis se casan</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

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
	<script src="/js/vendor/device.js"></script>
	<script src="{{ elixir("js/app.js") }}"></script>
</body>
</html>