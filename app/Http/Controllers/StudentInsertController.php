<?php

namespace App\Http\Controllers;

use App\Models\CommentDoubt;
use App\Models\Doubt;
use Pest\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use phpDocumentor\Reflection\Types\Null_;

class StudentInsertController extends Controller
{

    protected $loggedInUserId;

    public function __construct()
    {
        // Set the logged-in user's ID
        $this->loggedInUserId = Auth::id();
    }

    // function for insert doubts
    public function insertDoubt(Request $req) {
        
        try {
            $validatedData = $req->validate([
                'class_id' => 'required|integer',
                'subject_id' => 'required|integer',
                'chapter_id' => 'required|integer',
                'text' => 'required|string|max:5000',
                'image' => 'nullable|file|image|max:2048', 
                'audio' => 'nullable|file|max:5120', 
            ]);
            
            // generate unique slug for doubt
            $slug = Str::random(5) . uniqid() . Str::random(15);
    
            // handle audio upload      
            $audioPath = NULL;
            if ($req->hasFile('audio')) {
                $audio = $req->file('audio');            
                $extension = $audio->getClientOriginalExtension();
                $fileName = $slug . '.' . $extension;
                $audioPath = $audio->storeAs('audios', $fileName, 'public');
            }
            
            // handle image upload
            $imagePath = NULL;
            if ($req->hasFile('image')) {
                $image = $req->file('image');
                $extension = $image->getClientOriginalExtension();
                $customImageName = $slug . '.' . $extension; 
                $imagePath = $image->storeAs('images', $customImageName, 'public'); 
            } 
            
            
            // Add file paths to validated data
            $validatedData['image'] = $imagePath;
            $validatedData['audio'] = $audioPath; 
            $validatedData['slug'] = $slug; 
            $validatedData['user_id'] = $this->loggedInUserId; 
    
            // Insert data into the database
            $doubt = Doubt::create($validatedData);
    
            // insert into db
            return to_route("student.post.doubt")->with('success','Doubt Posted Successfully.');
        } catch (\Exception $e) {
            return $e;
            return to_route("student.post.doubt")->with('error', 'An error occurred while submitting your doubt.');
   
        }
    }

    // function for insert student comment
    public function insertComment(Request $req) {

        try {
            $validatedData = $req->validate([
                'doubt_id' => 'required|integer',
                'text' => 'required|string|max:5000',
                'image' => 'nullable|file|image|max:2048', 
                'audio' => 'nullable|file|max:5120', 
            ]);
            
            // generate unique slug for doubt
            $slug = $req->doubt_slug;
    
            // handle audio upload      
            $audioPath = NULL;
            if ($req->hasFile('audio')) {
                $audio = $req->file('audio');            
                $extension = $audio->getClientOriginalExtension();
                $fileName = $slug . '-'.time().'.' . $extension;
                $audioPath = $audio->storeAs('comment/audios', $fileName, 'public');
            }
            
            // handle image upload
            $imagePath = NULL;
            if ($req->hasFile('image')) {
                $image = $req->file('image');
                $extension = $image->getClientOriginalExtension();
                $customImageName = $slug . '-'.time().'.' . $extension; 
                $imagePath = $image->storeAs('comment/images', $customImageName, 'public'); 
            } 
            
            
            // Add file paths to validated data
            $validatedData['image'] = $imagePath;
            $validatedData['audio'] = $audioPath;  
            $validatedData['user_id'] = $this->loggedInUserId; 
    
            // Insert data into the database
            CommentDoubt::create($validatedData);
    
            // insert into db
            return to_route("student.doubt.details",$slug)->with('success','Comment Posted Successfully.');
        } catch (\Exception $e) {
            return $e;
            return to_route("student.doubt.details",$slug)->with('error', 'An error occurred while submitting your Comment.');
   
        }
    }
}
