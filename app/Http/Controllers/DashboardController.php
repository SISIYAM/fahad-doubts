<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Doubt;
use App\Models\SolvedDoubt;
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
        
        // condition for render student dashboard
        if (Gate::allows("isStudent")) {
            // search posted doubts by user
            $doubts = Doubt::where('user_id',$this->loggedInUserId)->with('student','class','subject','chapter')->take(3)->get();

            return Inertia::render("student/Home",['doubts' => $doubts]);
        }
    

        // condition for render solver dashboard
        if(Gate::allows("isSolver")){
            // search posted doubts by user
            $solutions = SolvedDoubt::where('solver_id',$this->loggedInUserId)->with('doubt','solver')->get();
            
 
            $now = Carbon::now();
            $startOfMonth = $now->startOfMonth()->toDateTimeString();
            $endOfMonth = $now->endOfMonth()->toDateTimeString();

            // Count solutions created this month
            $monthlySolutions = SolvedDoubt::where('solver_id', $this->loggedInUserId)
            ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
            ->with('doubt','solver')
            ->get();
        
             // Sum up the difficulty field from all solutions
            $monthlyCreditEarned = $monthlySolutions->sum('difficulty');
            
            return Inertia::render("solver/Home",['solutions' => $solutions,'monthlySolutions' => $monthlySolutions,'monthlyCreditEarned' => $monthlyCreditEarned]);
        }

        // condition for render admin dashboard
        if (Gate::allows("isAdmin")) {
            return Inertia::render("admin/Home");
        }
    

        // condition for render moderator doubt
        if (Gate::allows("isModerator")) {
            return Inertia::render("moderator/Home");
        }

        // Fallback if no role matches
        return to_route("login")->with("error", "Access denied.");
    }
}
