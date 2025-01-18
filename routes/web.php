<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;


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

    
});


