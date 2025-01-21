<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminInsertController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DoubtController;
use App\Http\Controllers\SolverController;
use App\Http\Controllers\SolverInsertController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\StudentInsertController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Middleware\ValidateAdmin;
use App\Http\Middleware\ValidateSolver;
use App\Http\Middleware\ValidateStudent;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

#=== Error Routes ===#
Route::get("/error/404",function () {
    return Inertia::render("errors/Error");
})->name("error.404");

Route::get("/error/forbidden",function () {
    return Inertia::render("errors/Forbiddent");
})->name("error.forbidden");



#=== Routes for authentication ===#
Route::controller(AuthController::class)->group(function() {

    // route for load login form
    Route::get("/auth/login","loadLoginForm")->name("auth.login");
    Route::get('/logout','logout')->name('auth.logout');
    #=== Post Routes ===#
    Route::post("/auth/login","login")->name("execute.auth.login");
});



#=== Authentication middleware ===#
Route::middleware([AuthMiddleware::class])->group(function () {


    Route::controller(DashboardController::class)->group(function() {

        // route for load root directiory
        Route::get("/","loadDashboard")->name("dashboard");
    });


    #=== Middle ware for validate student only ===#
    Route::middleware([ValidateStudent::class])->group(function () {
            #=== Routes for students ===#
        Route::controller(StudentController::class)->group(function() {  
            // route for load post doubts page
            Route::get("/post/doubt","loadPostDoubt")->name("student.post.doubt");
            Route::get("/explore/doubts","laodExploreDoubt")->name("student.explore.doubt");
            // route for load doubt details page
            Route::get("/doubt/{slug?}","loadDoubtDetails")->name("student.doubt.details");
        });

        #=== Routes for student insert controller ===#
        Route::controller(StudentInsertController::class)->group(function() {
            // for insert doubts
            Route::post("/execute/add/doubt","insertDoubt")->name("execute.add.doubt");
            // route for insert student comment
            Route::post("/execute/student/add/comment","insertComment")->name("execute.student.add.comment");
            // route for handle student satisfaction
            Route::post("/execute/student/satisfiction","submitStudentSatisfaction")->name("execute.student.satisfaction");
        });
    });

    #=== Middle ware for validate solver only ===#
    Route::middleware([ValidateSolver::class])->group(function () {
        #=== Routes for solver ===#
        Route::controller(SolverController::class)->group(function() {  
            // route for load post doubts page
            Route::get("/locked/doubt","loadLockedDoubt")->name("solver.locked.doubt");
            Route::get("/browse/doubt","loadBrowseDoubt")->name("solver.browse.doubt");
             // route for load doubt details page
            Route::get("/solver/doubt/{slug?}","loadSolverDoubtDetails")->name("solver.doubt.details");
        });

        #=== Routes for solver insert controller
        Route::controller(SolverInsertController::class)->group(function() {
            // route for submit solution
            Route::post("/execute/doubt/submit/solution","submitSolution")->name("execute.solver.submit.solution");
            // route for insert solver comment
            Route::post("/execute/solver/add/comment","insertComment")->name("execute.solver.add.comment");
            // route for lock doubt
            Route::post("/execute/lock/doubt","lockDoubt")->name("execute.lock.doubt");
        });
    });

    #=== Middle ware for validate admin only ===#
    Route::middleware([ValidateAdmin::class])->group(function () {
        #=== Routes for admin ===#
        Route::controller(AdminController::class)->group(function() {  
            // route for load add class form
            Route::get("/admin/manage/matrials","loadMaterialsPage")->name("admin.manage.matrials");
            
            
        });


        #=== Routes for Admin insert controller
        Route::controller(AdminInsertController::class)->group(function() {
            // route for insert class
            Route::post("/execute/add/class","insertClass")->name("admin.execute.add.class");
            // route for insert subject
            Route::post("/execute/add/subject","insertSubject")->name("admin.execute.add.subject");
            // route for insert chapter
            Route::post("/execute/add/chapter","insertChapter")->name("admin.execute.add.chapter");
        });

    });


    #=== Routes for Doubts ===#
    Route::controller(DoubtController::class)->group(function() {
        // route for load doubts details
        
    });

    
});


