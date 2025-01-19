<?php

namespace App\Http\Controllers;

use App\Models\StudentClass;
use Illuminate\Http\Request;

class AdminInsertController extends Controller
{
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
            
            $insert = StudentClass::create($validatedData);
    
            return to_route("admin.add.class")->with('success', 'Class added successfully!');
        } catch (\Exception $th) {
            
            return to_route("admin.add.class")->with('error', 'Failed to add the class. Please try again.');
        }
    }
    
}
