<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Doubt;
use Illuminate\Http\Request;

class SolverController extends Controller
{
    // function for load locked doubts page
    public function loadLockedDoubt() {
        return Inertia::render("solver/LockedDoubt");
    }

    // function for load browse doubts
    public function loadBrowseDoubt() {

        // search doubts
        $doubts = Doubt::orderBy('status', 'asc') 
               ->orderBy('id', 'desc')    
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
}
