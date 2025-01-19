<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    // function for load post doubt page
    public function loadPostDoubt() {
        return Inertia::render("student/PostDoubt");
    }

    // function for load explore doubts page
    public function laodExploreDoubt() {
        return Inertia::render("student/ExploreDoubt");
    }
}
