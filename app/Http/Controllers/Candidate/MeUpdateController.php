<?php

namespace App\Http\Controllers\Candidate;

use App\Http\Controllers\Controller;
use App\Http\Requests\Candidate\MeUpdateRequest;
use App\Models\Candidate;
use App\Models\CandidatesSkill;
use Illuminate\Http\Request;

class MeUpdateController extends Controller
{
    public function __invoke(MeUpdateRequest $req)
    {
        $token = $req->get('api_token');

        $id = Candidate::where('api_token', $token)->select('id')->get()[0]['id'];

        Candidate::where('id', $id)->update([
            'about' => $req['about'],
            'phone' => $req['phone']
        ]);
        CandidatesSkill::where('id_candidate', $id)->delete();
        foreach ($req['skills'] as $skill) {
            if (!is_int($skill)) {
                return response()->json(
                    [
                        'status' => false,
                        'message' => 'Массив скиллов содержит не число'
                    ],
                    400
                );
            }

            CandidatesSkill::create([
                'id_skill' => $skill,
                'id_candidate' => $id
            ]);
        }

        return response()->json(['status' => true], 200);
    }
}
