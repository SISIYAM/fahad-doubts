<?php

namespace App\Models;

use App\Models\User;
use App\Models\Subject;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class StudentClass extends Model
{
    
    use Sluggable;

    protected $fillable = [
        'name',
        'slug',
        'status',
        'author',
    ];

    // relation between subject and author
    public function author() {
        return $this->belongsTo(User::class,'author','id');
    }

    // relation between subjects and class
    public function subjects() {
        return $this->hasMany(Subject::class,'class_id','id');
    }

    // relation between class and doubt
    public function doubts() {
        return $this->hasMany(Doubt::class,'class_id','id');
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
