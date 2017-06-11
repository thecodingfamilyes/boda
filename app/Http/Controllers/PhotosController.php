<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transformers\PhotosTransformer;
use \Storage;

class PhotosController extends ApiController
{
    public function index(Request $request)
    {
        $storage = Storage::disk('s3');

        $photos = collect($storage->files('thumbs/small'));

        return $this->outputCollection($photos, new PhotosTransformer);
    }

    public function show(Request $request, $path, $size, $filename)
    {
        $photopath = implode('/', [$path, $size, $filename]);

        return $this->sendPhoto($photopath);
    }

    public function original(Request $request, $path, $filename)
    {
        $photopath = implode('/', [$path, $filename]);

        return $this->sendPhoto($photopath);
    }

    protected function sendPhoto($photopath = null)
    {
        $storage = Storage::disk('s3');

        if (!$storage->has($photopath)) {
            abort(404);
        }

        return \Image::make($storage->get($photopath))->response();
    }
}
