<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Chapter;
use App\Models\Department;
use App\Models\Subject;
use App\Models\StudentClass;
use App\Models\Universitie;
use App\Models\User;
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

    // method for load manage solvers page
    public function loadManageSolverPage() {
        // find solver
        $solvers = User::where("role","solver")->orderBy('id','desc')->get();
       
        // find universities 
        $universities = Universitie::all();
        
        // find departments
        $departments = Department::all();

    
        return Inertia::render("admin/ManageSolver",['universities' => $universities,'departments' => $departments,'solvers' => $solvers]);
    }

    // method for load manage moderators page
    public function loadManageModeratorPage() {
        return Inertia::render("admin/ManageModerator");
    }

    // method for load admin profile
    public function loadAdminProfile() {
        return Inertia::render("admin/Profile");
    }

}
