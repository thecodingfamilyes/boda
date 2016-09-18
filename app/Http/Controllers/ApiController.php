<?php namespace App\Http\Controllers;

use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use League\Fractal\Manager;

/**
 *
 */
abstract class ApiController extends Controller {

	const CODE_WRONG_ARGS = 'MSS-WRONGARGS';
	const CODE_NOT_FOUND = 'MSS-NOTFOUND';
	const CODE_INTERNAL_ERROR = 'MSS-ERROR';
	const CODE_UNAUTHORIZED = 'MSS-UNAUTHORIZED';
	const CODE_FORBIDDEN = 'MSS-FORBIDDEN';

	protected $statusCode = 200;

	function __construct(Manager $fractal) {
		$this->Fractal = $fractal;
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