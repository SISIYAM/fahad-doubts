<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Chapter;
use App\Models\Subject;
use App\Models\StudentClass;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // function for load add class form
    public function loadMaterialsPage() {

        // search classes
        $classes = StudentClass::orderBy('id', 'desc')->with("author")->get();
        
        // search subjects 
        $subjects = Subject::orderBy('id','desc')->with("class","author")->get();

        // search chapters
        $chapters = Chapter::orderBy('id','desc')->with(['subject' => function($query){
            $query->with("class");
        },"subject","author"])->get();

        

        return Inertia::render("admin/ManageMaterial",["classes" => $classes,"subjects" => $subjects,"chapters" => $chapters]);
    }

}