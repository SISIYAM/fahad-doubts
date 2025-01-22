<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Doubt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SolverController extends Controller
{

    protected $loggedInUserId;

    public function __construct()
    {
        // Set the logged-in user's ID
        $this->loggedInUserId = Auth::id();
    }

    // function for load locked doubts page
    public function loadLockedDoubt() {
        // search doubts
        $doubts = Doubt::where('status',0)
               ->where('locked_by',$this->loggedInUserId)
               ->orderBy('status', 'asc') 
               ->orderBy('id', 'desc')    
               ->with('student','class','subject','chapter')
               ->get();

        
        return Inertia::render("solver/LockedDoubt",['doubts' => $doubts]);
    }

    // function for load browse doubts
    public function loadBrowseDoubt() {

        // search doubts
        $doubts = Doubt::orderBy('status', 'asc') 
               ->orderBy('id', 'desc')    
               ->with('student','class','subject','chapter')
               ->get();

        
        return Inertia::render("solver/BrowseDoubt",['doubts' => $doubts]);
    }

    // method for load doubt details page
    public function loadSolverDoubtDetails(string $slug = null) {
        
        // search doubt  details
        $doubtDetails = Doubt::where(compact('slug'))->with('student','student','class','subject','chapter','solve','comments.user')->first();
        // return $doubtDetails;
        return Inertia::render("solver/SolverDoubtDetails",['doubtDetails' => $doubtDetails]);

    }

    // function for laod solver profile
    public function loadSolverProfile() {
        return Inertia::render("solver/Profile");
    }
}
