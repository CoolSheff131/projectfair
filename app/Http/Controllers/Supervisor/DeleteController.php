<?php

namespace App\Http\Controllers\Supervisor;

use App\Http\Controllers\Controller;
use App\Models\Supervisor;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(Supervisor $supervisor)
    {
        $supervisor->delete();
        return response([]);
    }
}
