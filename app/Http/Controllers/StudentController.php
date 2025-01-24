<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Doubt;
use App\Models\Chapter;
use App\Models\Subject;
use App\Models\StudentClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{

    protected $loggedInUserId;

    public function __construct()
    {
        // Set the logged-in user's ID
        $this->loggedInUserId = Auth::id();
    }

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
 
        
         // search user doubts 
         $doubts = Doubt::where('user_id',$this->loggedInUserId)->orderBy('id','desc')->with('student','class','subject','chapter')->get();

        return Inertia::render("student/PostDoubt",['doubts' => $doubts,'classes' => $classes,'subjects' => $subjects,'chapters' => $chapters]);
    }

    // function for load explore doubts page
    public function laodExploreDoubt() {
        // search posted doubts by user
        $doubts = Doubt::orderBy('id','desc')->with('student','class','subject','chapter')->get();
        // search classes
        $classes = StudentClass::with('subjects','doubts')->get();
        
        // search subjects 
        $subjects = Subject::with("class","doubts")->get();

        // search chapters
        $chapters = Chapter::with(['subject' => function($query){
            $query->with("class");
        },"subject"])->get();

        // return $chapters;
        
        return Inertia::render("student/ExploreDoubt",['doubts' => $doubts,'classes' => $classes,'subjects' => $subjects,'chapters' => $chapters]);
    }

    // method for load doubt details page
    public function loadDoubtDetails(string $slug = null) {
        
        // search doubt  details
        $doubtDetails = Doubt::where(compact('slug'))->with('student','student','class','subject','chapter','solve','comments.user')->first();
        
        return Inertia::render("student/SolveDetails",['doubtDetails' => $doubtDetails]);

    }

    // method for load student profile
    public function loadStudentProfile() {
       
        try { 
                 
            $doubts = Doubt::where('user_id',$this->loggedInUserId)->with('student','class','subject','chapter')->get();
            // find classes
            $classes = StudentClass::where('status','1')->get();
            return Inertia::render("student/Profile",['doubts' =>$doubts,'classes' => $classes]);

        } catch (\Throwable $th) {
            return $th;
        }
       
    }
}
