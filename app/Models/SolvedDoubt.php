<?php

namespace App\Models;

use App\Models\Doubt;
use Illuminate\Database\Eloquent\Model;

class SolvedDoubt extends Model
{
    
    protected $fillable = [
        'doubt_id',
        'solver_id',
        'text',  
        'image',  
        'audio',  
        'status',
        'isSatisfied',
        'isReported',
        'difficulty',
        
    ];


    // function for reltion between solves and doubts
    public function doubt(){
        return $this->belongsTo(Doubt::class,'doubt_id','id');
    }

    // function for realtion between solves and solver
    public function solver() {
        return $this->hasOne(User::class,"id","solver_id");
    }
    
}
