<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ModeratorController extends Controller
{
    // method for load moderator profile
    public function loadModeratorProfile () {
        return Inertia::render("moderator/Profile");
    }
}
