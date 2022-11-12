<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supervisor extends Model
{
    use HasFactory;

    protected $guarded = false;

    /**
     * Получить проекты преподавателя
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
