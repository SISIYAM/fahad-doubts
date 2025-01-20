<?php

namespace App\Models;

use App\Models\User;
use App\Models\Subject;
use App\Models\SolvedDoubt;
use App\Models\CommentDoubt;
use App\Models\StudentClass;
use Illuminate\Database\Eloquent\Model;
use App\Models\Chapter;

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
    public function solve() {
        return $this->hasOne(SolvedDoubt::class,"doubt_id","id");
    }

    // relation between doubt and comment
    public function comments(){
        return $this->hasMany(CommentDoubt::class,"doubt_id","id");
    }

    // relation between doubt and solver
    public function solver() {
        return $this->hasOne(User::class,"id","solver_id");
    }

     // relation between doubt and student
     public function student() {
        return $this->hasOne(User::class,"id","user_id");
    }

    // relation with class
    public function class() {
        return $this->belongsTo(StudentClass::class,'class_id','id');
    }

    // relation with subject
    public function subject() {
        return $this->belongsTo(Subject::class,'subject_id','id');
    }

    // relation with chapter
    public function chapter() {
        return $this->belongsTo(Chapter::class,'chapter_id','id');
    }

}
