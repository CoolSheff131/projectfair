<?php

namespace App\Http\Controllers\Speciality;

use App\Http\Controllers\Controller;
use App\Http\Resources\SpecialityResource;
use App\Models\Speciality;

/** Получить
 * информацию о специальности
 */

class ShowController extends Controller {
    public function __invoke(Speciality $speciality) {
        return new SpecialityResource($speciality);
    }
}
