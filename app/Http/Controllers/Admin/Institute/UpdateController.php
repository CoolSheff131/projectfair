<?php

namespace App\Http\Controllers\Admin\Candidate;

use App\Http\Controllers\Controller;
use App\Http\Requests\Institute\UpdateRequestAdminInstitute;
use App\Models\Institute;

/**
 * Обновить данные института
 */
class UpdateController extends Controller
{
    public function __invoke(UpdateRequestAdminInstitute $request, Institute $institute)
    {
        $data = $request->validated();
        $institute->update($data);
        return response([]);
    }
}
