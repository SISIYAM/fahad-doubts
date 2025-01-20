<?php

namespace App\Http\Controllers;

use App\Models\CommentDoubt;
use App\Models\Doubt;
use App\Models\SolvedDoubt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SolverInsertController extends Controller
{
    protected $loggedInUserId;

    public function __construct()
    {
        // Set the logged-in user's ID
        $this->loggedInUserId = Auth::id();
    }

    // function for insert student comment
    public function submitSolution(Request $req) {
        
        try {
            $validatedData = $req->validate([
                'doubt_id' => 'required|integer',
                'text' => 'required|string|max:5000',
                'image' => 'nullable|file|image|max:2048', 
                'audio' => 'nullable|file|max:5120', 
            ]);
            
            // slug for doubt
            $slug = $req->doubt_slug;
    
            // handle audio upload      
            $audioPath = NULL;
            if ($req->hasFile('audio')) {
                $audio = $req->file('audio');            
                $extension = $audio->getClientOriginalExtension();
                $fileName = $slug . '-'.time().'.' . $extension;
                $audioPath = $audio->storeAs('solution/audios', $fileName, 'public');
            }
            
            // handle image upload
            $imagePath = NULL;
            if ($req->hasFile('image')) {
                $image = $req->file('image');
                $extension = $image->getClientOriginalExtension();
                $customImageName = $slug . '-'.time().'.' . $extension; 
                $imagePath = $image->storeAs('solution/images', $customImageName, 'public'); 
            } 
            
            
            // Add file paths to validated data
            $validatedData['image'] = $imagePath;
            $validatedData['audio'] = $audioPath;  
            $validatedData['status'] = 2;  
            $validatedData['solver_id'] = $this->loggedInUserId; 
            
            // Insert data into the database
            SolvedDoubt::create($validatedData);

            // also update doubt status to 2 and solver id 
            Doubt::where('slug',$slug)->update([
                'status' => 2,
                'solver_id' => $this->loggedInUserId,
            ]);
            
    
            // insert into db
            return to_route("solver.doubt.details",$slug)->with('success','Comment Posted Successfully.');
        } catch (\Exception $e) {
            return $e;
            return to_route("solver.doubt.details",$slug)->with('error', 'An error occurred while submitting your Comment.');
   
        }
    }
}
