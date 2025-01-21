<?php

namespace App\Models;

use App\Models\User;
use App\Models\Doubt;
use App\Models\SolvedDoubt;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        'doubt_id',
        'solve_id',
        'student_id',
        'solver_id',
        'text',
        
    ];

     // function for relation between report and doubt
     public function doubt() {
        return $this->belongsTo(Doubt::class, 'doubt_id', 'id');
    }

    // function for relation between report and solver
    public function solver() {
        return $this->belongsTo(User::class, 'solver_id', 'id');
    }

    // function for relation between report and student
    public function student() {
        return $this->belongsTo(User::class, 'student_id', 'id');
    }

    // function for relation between report and solution
    public function solution() {
        return $this->belongsTo(SolvedDoubt::class, 'solve_id', 'id');
    }
}
