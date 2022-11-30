<?php

namespace App\Http\Controllers\Admin\Institute;

use App\Http\Controllers\Controller;
use App\Http\Resources\InstituteResource;
use App\Models\Institute;
use Illuminate\Http\Request;

/**
 * Получение всех институтов
 */
class IndexController extends Controller
{
//* later add documention

    public function __invoke()
    {
        $institutes = Institute::all();
        return InstituteResource::collection($institutes);
    }
}
