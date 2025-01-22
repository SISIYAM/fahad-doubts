<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class StudentUpdateController extends Controller
{
    // function for update student profile
    public function updateProfile(Request $req)
    {
        try {
            // Validate incoming data
            $validatedData = $req->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'mobile' => 'nullable|numeric', 
                'studentClass' => 'required|string|max:255',
                'institue' => 'nullable|string|max:255',
                'group' => 'required|string|max:255',
            ]);

            
            $user = User::where('id',$req->user_id)->first();
        
            // update user profile with validated data
            $user->update([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'mobile' => $validatedData['mobile'],
                'studentClass' => $validatedData['studentClass'],
                'institue' => $validatedData['institue'],
                'group' => $validatedData['group'],
            ]);

        return to_route('student.profile')->with('success','Profile updated successfully.');
            
        } catch (\Exception $e) {

        return $e;

        }
    }

}
