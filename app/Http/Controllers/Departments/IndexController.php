<?php

namespace App\Http\Controllers\Departments;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;

class IndexController extends Controller{
    public function __invoke() {
        $department = Department::all();
        return DepartmentResource::collection($department);
    }
}
