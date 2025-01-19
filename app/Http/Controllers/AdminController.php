<?php

namespace App\Http\Controllers;

use App\Models\StudentClass;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    // function for load add class form
    public function loadAddClassForm() {

        // search classes
        $classes = StudentClass::orderBy('id', 'desc')->get();

        return Inertia::render("admin/ManageClass",["classes" => $classes]);
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
