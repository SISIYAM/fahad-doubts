<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SolverController extends Controller
{
    // function for load locked doubts page
    public function loadLockedDoubt() {
        return Inertia::render("solver/LockedDoubt");
    }

    // function for load browse doubts
    public function loadBrowseDoubt() {
        return Inertia::render("solver/BrowseDoubt");
    }
}
