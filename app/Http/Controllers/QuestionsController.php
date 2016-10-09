<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/*use App\Http\Requests\StoreQuestion;
use App\Http\Requests\DeleteQuestion;*/
use App\Question;
use App\Transformers\QuestionsTransformer;
use Illuminate\Support\Facades\Auth;

class QuestionsController extends ApiController
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		$questions = Question::orderBy('created_at', 'desc')->get();

		if (in_array('author', $this->embeds)) {
			$questions->load('user');
		}

		if (in_array('author', $this->embeds)) {
			$questions->load('user');
		}

		return $this->outputCollection($questions, new QuestionsTransformer);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	/*public function store(StoreQuestion $request)
	{
		$data = $request->all();
		$data['user_id'] = Auth::guard('api')->user()->id;
		$question = Question::create($data);

		return $this->outputItem($question, new QuestionsTransformer);
	}*/

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	/*public function destroy(DeleteQuestion $request, $id)
	{
		$question = Question::find($id);
		Question::destroy($id);

		return $this->outputItem($question, new QuestionsTransformer);
	}*/
}
