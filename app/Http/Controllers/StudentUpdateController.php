<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class StudentUpdateController extends Controller
{
    // function for update student profile
    public function updateProfile(Request $req)
    {
  
         // Validate incoming data
         $validatedData = $req->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'mobile' => 'nullable|numeric', 
            'studentClass' => 'nullable|string|max:255',
            'institue' => 'nullable|string|max:255',
            'group' => 'nullable|string|max:255',
        ]);

        try {
            
            $user = User::where('id',$req->user_id)->first();
        
            // update user profile with validated data
            $user->update([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'mobile' => $validatedData['mobile'],
                'class' => $validatedData['studentClass'],
                'institue' => $validatedData['institue'],
                'group' => $validatedData['group'],
            ]);

        return to_route('student.profile')->with('success','Profile updated successfully.');
            
        } catch (\Exception $e) {

        return to_route('student.profile')->with('error','An error occurd while updating profile'.$e->getMessage());

        }
    }

}
