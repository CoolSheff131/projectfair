<?php

namespace App\Http\Controllers\Admin\Mail;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Illuminate\Http\Request;

/**
* Получение всех институтов
*/
class IndexController extends Controller
{
    public function __invoke(Request $request)
    {
        $emails = array();
        $group = $request->get('group');
        $content = $request->get('content');

        $candidates = Candidate::all();
        foreach ($candidates as $candidate) {
            $candidateGroup = $candidate.group();
            if ($candidateGroup == $group) {
                array_push($emails, $candidate.email());
            }
        }

    if (count($emails) == 0) {
        return;
    }

    // mail logistics...
    // send to all off $emails with $content

    }
}
