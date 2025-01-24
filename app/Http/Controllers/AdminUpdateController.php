<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminUpdateController extends Controller
{
    // fucntion for update user status
    public function updateStatus(Request $req) {
        try {
 
            if($req->status){
                $type = "success";
                $message = "Solver Activated successfully.";
            }else{
                $type = "warning";
                $message = "Solver Deactivated successfully.";

            }

            $user = User::where("id",$req->user_id)->first();
            $user->update([
                'status' => $req->status,
            ]);

            return to_route("admin.manage.solver")->with($type,$message);

        } catch (\Exception $e) {
            return to_route("admin.manage.solver")->with("error","An error occurred while updating solver".$e->getMessage());
        }
    }

    // function for approve student
    public function approveStudent(Request $req) {
        try {
 
            if($req->isVerified){
                $type = "success";
                $message = "Student Approved!.";
            }else{
                $type = "warning";
                $message = "Student Declined!";

            }

            $user = User::where("id",$req->user_id)->first();
            $user->update([
                'isVerified' => $req->isVerified,
            ]);

            return to_route("admin.manage.student")->with($type,$message);

        } catch (\Exception $e) {
            return to_route("admin.manage.student")->with("error","An error occurred while updating student".$e->getMessage());
        }
    }
}
