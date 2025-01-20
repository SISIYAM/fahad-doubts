<?php

namespace App\Models;

use App\Models\Doubt;
use Illuminate\Database\Eloquent\Model;

class SolvedDoubt extends Model
{
    
    protected $fillable = [
        'doubt_id',
        'solver_id	',
        'text',  
        'image',  
        'audio',  
        'status',  
        
    ];


    // function for reltion between solves and doubts
    public function doubt(){
        return $this->belongsTo(Doubt::class,'doubt_id','id');
    }
    
}
