<?php namespace App\Http\Controllers;

use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use League\Fractal\Manager;
use Illuminate\Http\Request;

/**
 *
 */
abstract class ApiController extends Controller {

	const CODE_WRONG_ARGS = 'API-WRONGARGS';
	const CODE_NOT_FOUND = 'API-NOTFOUND';
	const CODE_INTERNAL_ERROR = 'API-ERROR';
	const CODE_UNAUTHORIZED = 'API-UNAUTHORIZED';
	const CODE_FORBIDDEN = 'API-FORBIDDEN';

	protected $statusCode = 200;
	protected $embeds = [];

	function __construct(Manager $fractal, Request $request) {
		$this->Fractal = $fractal;

		// Are we going to try and include embedded data?
		if (!empty($request->input('embed'))) {
			$this->Fractal->parseIncludes($request->input('embed'));
			$this->embeds = explode(',', $request->input('embed'));
		}
	}

	public function getStatusCode() {
		return $this->statusCode;
	}

	public function setStatusCode($code = 200) {
		$this->statusCode = $code;

		return $this;
	}

	protected function outputItem($item, $callback) {
		$resource = new Item($item, $callback);
		$rootScope = $this->Fractal->createData($resource);

		return $this->outputArray($rootScope->toArray());
	}

	protected function outputCollection($collection, $callback) {
		$resource = new Collection($collection, $callback);
		$rootScope = $this->Fractal->createData($resource);

		return $this->outputArray($rootScope->toArray());
	}

	protected function outputArray(array $array, array $headers = array()) {
		return response()->json($array, $this->statusCode, $headers);
	}

	protected function outputError($message, $code) {
		if ($this->statusCode == 200) {
			trigger_error('Please, do not output errors with an HTTP 200', E_USER_ERROR);
		}

		return $this->outputArray([
			'error' => [
				'code' => $code,
				'http_code' => $this->statusCode,
				'message' => $message
			]
		]);
	}

	protected function forbidden($message = 'Forbidden') {
		return $this->setStatusCode(403)->outputError($message, self::CODE_FORBIDDEN);
	}

	protected function internalError($message = 'Internal error') {
		return $this->setStatusCode(500)->outputError($message, self::CODE_INTERNAL_ERROR);
	}

	protected function notFound($message = 'Not found') {
		return $this->setStatusCode(404)->outputError($message, self::CODE_NOT_FOUND);
	}

	protected function unauthorized($message = 'Unauthorized') {
		return $this->setStatusCode(401)->outputError($message, self::CODE_UNAUTHORIZED);
	}

	protected function invalidArgs($message = 'Invalid arguments') {
		return $this->setStatusCode(400)->outputError($message, self::CODE_WRONG_ARGS);
	}
}