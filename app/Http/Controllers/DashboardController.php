<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Doubt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
    protected $loggedInUserId;

    public function __construct()
    {
        // Set the logged-in user's ID
        $this->loggedInUserId = Auth::id();
    }

    // function for load dashboard
    public function loadDashboard() {

        #=== render pages based on logged in users role ===#
        
        if (Gate::allows("isStudent")) {
            // search posted doubts by user
            $doubts = Doubt::where('user_id',$this->loggedInUserId)->with('student','class','subject','chapter')->get();

            return Inertia::render("student/Home",['doubts' => $doubts]);
        }
    
        if(Gate::allows("isSolver")){
            return Inertia::render("solver/Home");
        }

        if (Gate::allows("isAdmin")) {
            return Inertia::render("admin/Home");
        }
    
        if (Gate::allows("isModerator")) {
            return Inertia::render("moderator/Home");
        }

        // Fallback if no role matches
        return to_route("login")->with("error", "Access denied.");
    }
}
