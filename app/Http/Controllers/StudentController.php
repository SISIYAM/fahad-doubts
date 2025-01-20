<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Chapter;
use App\Models\Subject;
use App\Models\StudentClass;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    // function for load post doubt page
    public function loadPostDoubt() {

         // search classes
         $classes = StudentClass::all();
        
         // search subjects 
         $subjects = Subject::with("class")->get();
 
         // search chapters
         $chapters = Chapter::with(['subject' => function($query){
             $query->with("class");
         },"subject"])->get();
 
        //  return $chapters;

        return Inertia::render("student/PostDoubt",['classes' => $classes,'subjects' => $subjects,'chapters' => $chapters]);
    }

    // function for load explore doubts page
    public function laodExploreDoubt() {
        return Inertia::render("student/ExploreDoubt");
    }
}
