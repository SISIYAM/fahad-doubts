<?php

namespace App\Models;

use App\Models\User;
use App\Models\Chapter;
use App\Models\StudentClass;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Subject extends Model
{

    use Sluggable;

    protected $fillable = [
        'name',
        'class_id',
        'slug',
        'author',
    ];
    

    // relation between subject and author
    public function author() {
        return $this->belongsTo(User::class,'author','id');
    }

    // relation between subjects and class
    public function class()
    {
        return $this->belongsTo(StudentClass::class, 'class_id', 'id');
    }

    // relation between subject and chapters
    public function chapters() {
        return $this->hasMany(Chapter::class,'chapter_id','id');
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
