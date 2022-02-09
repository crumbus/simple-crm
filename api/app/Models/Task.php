<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';

    protected $fillable = [
        'task_id',
        'title',
        'description',
        'created_user_id',
        'delegated_user_id',
        'task_status_id',
        'task_stage_id',
    ];
}
