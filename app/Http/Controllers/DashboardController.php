<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    // function for load dashboard
    public function loadDashboard() {
        return Inertia::render("solver/Home");
    }
}
