<?php

namespace App\Models;

use App\Models\User;
use App\Models\Subject;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Chapter extends Model
{

    use Sluggable;

    protected $fillable = [
        'subject_id',
        'name',
        'slug',
        'author',
    ];
    
    
    // relation between subject and author
    public function author() {
        return $this->belongsTo(User::class,'author','id');
    }

    // relation between subject and chapters
    public function subject() {
        return $this->belongsTo(Subject::class,'subject_id','id');
    }

    


    // method for generate slug
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
