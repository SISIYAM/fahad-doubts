<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doubt extends Model
{

    protected $fillable = [
        'slug',
        'user_id',
        'class_id',
        'subject_id',
        'chapter_id',
        'text',  
        'image',  
        'audio',  
        'status',  
        'solver_id',  
        
    ];



    // relation between doubt and solved doubts
    public function solved() {
        return $this->hasOne(SolvedDoubt::class,"doubt_id","id");
    }

    // relation between doubt and comment
    public function comments(){
        return $this->hasMany(CommentDoubt::class,"doubt_id","id");
    }


}
