<?php

namespace App\Http\Controllers\Candidate;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Participation;
use Illuminate\Http\Request;

/**
 * Получение активного проекта студента
 */
class ActiveProjectController extends Controller
{
    public function __invoke(Request $request)
    {
        // $request->get('candidate')->activeProject();
        // $id = $request->get('candidate')->id;

        // $data = Participation::where('id_candidate', $id);
        $activeProject = $request->get('candidate')->activeProject();
        if ($activeProject) {
            return $activeProject;
        } else {
            return abort(404);
        }
    }
}