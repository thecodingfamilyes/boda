<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\StoreSignature;
use App\Http\Requests\DeleteSignature;
use App\Signature;
use App\Transformers\SignaturesTransformer;
use Illuminate\Support\Facades\Auth;

class SignaturesController extends ApiController
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		$signatures = Signature::orderBy('created_at', 'desc')->get();

		if (in_array('author', $this->embeds)) {
			$signatures->load('user');
		}

		if (in_array('author', $this->embeds)) {
			$signatures->load('user');
		}

		return $this->outputCollection($signatures, new SignaturesTransformer);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(StoreSignature $request)
	{
		$data = $request->all();
		$data['user_id'] = Auth::guard('api')->user()->id;
		$signature = Signature::create($data);

		return $this->outputItem($signature, new SignaturesTransformer);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(DeleteSignature $request, $id)
	{
		$signature = Signature::find($id);
		Signature::destroy($id);

		return $this->outputItem($signature, new SignaturesTransformer);
	}
}
