<?php

namespace App\Models;

use App\Models\Doubt;
use Illuminate\Database\Eloquent\Model;

class CommentDoubt extends Model
{
    protected $fillable = [
        'doubt_id',
        'user_id',
        'text',  
        'image',  
        'audio',  
        'status',  
        
    ];

    // function for realation between comment and doubt
    public function doubt() {
        return $this->belongsTo(Doubt::class,'doubt_id','id');
    }

    // relation between user and comment and user
    public function user() {
        return $this->hasOne(User::class,"id","user_id");
    }
}
