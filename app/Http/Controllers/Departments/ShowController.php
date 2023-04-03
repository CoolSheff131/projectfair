<?php

namespace App\Http\Controllers\Departments;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;

class ShowController extends Controller{
    public function __invoke(Department $department) {
      return new DepartmentResource($department);
    }
}
