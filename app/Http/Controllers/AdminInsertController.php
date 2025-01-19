<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Subject;
use App\Models\StudentClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminInsertController extends Controller
{

    protected $loggedInUserId;

    public function __construct()
    {
        // Set the logged-in user's ID
        $this->loggedInUserId = Auth::id();
    }


    // function for insert class
    public function insertClass(Request $req) {

        // validate the incoming request data
        $validatedData = $req->validate([
            'name' => 'string|required|max:20',
        ], [
            'name.required' => 'The class name is required.',
            'name.string' => 'The class name must be a valid string.',
            'name.max' => 'The class name must not exceed 20 characters.',
        ]);
    
        try {

            $validatedData['author'] = $this->loggedInUserId;

            $insert = StudentClass::create($validatedData);

            // return $insert;
            return to_route("admin.manage.matrials")->with('success', 'Class added successfully!');
        
        } catch (\Exception $th) {
            
            return to_route("admin.manage.matrials")->with('error', 'Failed to add the class. Please try again.');
        }
    }

    // function for insert subjects
    public function insertSubject(Request $req) {

        // validate the incoming request data
        $validatedData = $req->validate([
            'name' => 'string|required|max:20',
            'class_id' => 'numeric|required'
        ], [
            // Custom error messages for `name`
            'name.required' => 'The subject name is required.',
            'name.string' => 'The subject name must be a valid string.',
            'name.max' => 'The subject name must not exceed 20 characters.',
            
            // Custom error messages for `class_id`
            'class_id.required' => 'The class ID is required.',
            'class_id.numeric' => 'The class ID must be a valid number.',
        ]);
    
        try {

            $validatedData['author'] = $this->loggedInUserId;
            
            $insert = Subject::create($validatedData);
            
            return to_route("admin.manage.matrials")->with('success', 'Subject added successfully!');
       
        } catch (\Exception $th) {
            
            return to_route("admin.manage.matrials")->with('error', 'Failed to add the Subject. Please try again.');
        }
    }  

    // function for insert chapter
    public function insertChapter(Request $req) {

        
        // validate the incoming request data
        $validatedData = $req->validate([
            'name' => 'string|required|max:20',
            'class_id' => 'numeric|required',
            'subject_id' => 'numeric|required'
        ], [
            // Custom error messages for `name`
            'name.required' => 'The chapter name is required.',
            'name.string' => 'The chapter name must be a valid string.',
            'name.max' => 'The chapter name must not exceed 20 characters.',
            
            // Custom error messages for `class_id`
            'class_id.required' => 'The class ID is required.',
            'class_id.numeric' => 'The class ID must be a valid number.',
            
            // Custom error messages for `subject_id`
            'subject_id.required' => 'The subject ID is required.',
            'subject_id.numeric' => 'The subject ID must be a valid number.',
        ]);
        
    
        try {

            $validatedData['author'] = $this->loggedInUserId;
            
            $insert = Chapter::create($validatedData);
            
            return to_route("admin.manage.matrials")->with('success', 'Chapter added successfully!');
       
        } catch (\Exception $th) {
            
            return to_route("admin.manage.matrials")->with('error', 'Failed to add the Chapter. Please try again.');
        }
    } 
}
