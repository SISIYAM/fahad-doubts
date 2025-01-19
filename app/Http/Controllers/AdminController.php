<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    // function for load add class form
    public function loadAddClassForm() {
        return Inertia::render("admin/ManageClass");
    }

    // function for load add subject form
    public function loadAddSubjectForm() {
        return Inertia::render("admin/ManageSubject");
    }

    // function for load add class form
    public function loadAddChapterForm() {
        return Inertia::render("admin/ManageChapter");
    }
}
