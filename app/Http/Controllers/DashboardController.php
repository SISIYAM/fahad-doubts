<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
    // function for load dashboard
    public function loadDashboard() {

        #=== render pages based on logged in users role ===#
        
        if(Gate::allows("isSolver")){
            return Inertia::render("solver/Home");
        }

        if (Gate::allows("isStudent")) {
            return Inertia::render("student/Home");
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
