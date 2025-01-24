<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminInsertController;
use App\Http\Controllers\AdminUpdateController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DoubtController;
use App\Http\Controllers\ModeratorController;
use App\Http\Controllers\SolverController;
use App\Http\Controllers\SolverInsertController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\StudentInsertController;
use App\Http\Controllers\StudentUpdateController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Middleware\ValidateAdmin;
use App\Http\Middleware\ValidateModerator;
use App\Http\Middleware\ValidatePaidStudent;
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

    // route for load forgot passwordForm
    Route::get("/auth/forgot-password","loadForgotPasswordForm")->name('auth.forgot.password');
    // route for load registration form
    Route::get("/auth/registration","loadRegistrationForm")->name("auth.registration.form");
    // route for load verify otp form
    Route::get("/verify/otp","loadVerifyOtpForm")->name("load.otp.form");
    // route for load forgot password otp form
    Route::get("/forgot-password/verify/otp","loadForgotPasswordOtpForm")->name("load.forgot.verify.otp");
    // route for load set password form
    Route::get("/auth/set/password","loadSetPasswordForm")->name("load.set.password.form");
    // route for load set new password form
    Route::get("/forgot/set/new/password","loadSetNewPassword")->name("load.new.password.form");

    #=== Post Routes ===#
    // route for login
    Route::post("/auth/login","login")->name("execute.auth.login");
    // route for registration
    Route::post("/auth/registration","registration")->name("execute.auth.registration");
    // route for check otp
    Route::post("/verify/otp","verifyOtp")->name("verify.otp");
    // route for set password
    Route::post("/auth/set/password","setNewPassword")->name("auth.set.password");
    // route for execute final registration for student
    Route::post("/execute/signup","signUp")->name("execute.final.signup");

    // route for user password
    Route::post("/execute/change/password","changePassword")->name("execute.change.password");
    // route for execute forgot password logic
    Route::post("/execute/forgot/password","executeForgotPassword")->name("execute.forgot.password");
    // route for execute set new password
    Route::post("/execute/forgot/set/new/password","setNewPassword")->name("execute.set.new.password");
    // route for check forgot password otp
    Route::post("/forgot/password/otp/verify","verifyForgotPasswordOtp")->name("forgot.password.otp.verify");

    
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
            // route for load student profile
            Route::get("/student/profile","loadStudentProfile")->name("student.profile");
        });

        // middleware for validate paid students
       Route::middleware([ValidatePaidStudent::class])->group(function () {
            #=== Routes for student insert controller ===#
            Route::controller(StudentInsertController::class)->group(function() {
                // for insert doubts
                Route::post("/execute/add/doubt","insertDoubt")->name("execute.add.doubt");
                // route for insert student comment
                Route::post("/execute/student/add/comment","insertComment")->name("execute.student.add.comment");
                // route for handle student satisfaction
                Route::post("/execute/student/satisfiction","submitStudentSatisfaction")->name("execute.student.satisfaction");
                // route for submit report
                Route::post("/execute/student/report","submitStudentReport")->name("execute.student.report");
            });
       });

      // routes for student update controller\
      Route::controller(StudentUpdateController::class)->group(function () {
         // route for update profile
         Route::post("/execute/update/profile","updateProfile")->name("student.update.profile");
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
            // route for load solver profile
            Route::get("/solver/profile","loadSolverProfile")->name("solver.profile");

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
            // route for load manage solver page
            Route::get("/admin/manage/solvers","loadManageSolverPage")->name("admin.manage.solver");
            // route for manage moredators
            Route::get("/admin/manage/moderators","loadManageModeratorPage")->name("admin.manage.moderator");
            // route for load admin profile
            Route::get("/admin/profile","loadAdminProfile")->name("admin.profile");
            // route for load manage students page
            Route::get("/admin/manage/student","loadManageStudentPage")->name("admin.manage.student");

        });


        #=== Routes for Admin insert controller
        Route::controller(AdminInsertController::class)->group(function() {
            // route for insert class
            Route::post("/execute/add/class","insertClass")->name("admin.execute.add.class");
            // route for insert subject
            Route::post("/execute/add/subject","insertSubject")->name("admin.execute.add.subject");
            // route for insert chapter
            Route::post("/execute/add/chapter","insertChapter")->name("admin.execute.add.chapter");
            // route for add solver
            Route::post("/execute/add/solver","addSolver")->name("admin.add.solver");
        });

        #=== Routes for admin update controller ===#
        Route::controller(AdminUpdateController::class)->group(function() {
            // route for update user status active or deactive
            Route::post("/update/user/status","updateStatus")->name("admin.update.user.status");
            // route for approve students
            Route::post("/approve/student","approveStudent")->name("admin.approve.student");
        });

    });


    #=== Routes for moderator ===#
    Route::middleware([ValidateModerator::class])->group(function () {
        // routes for Moderator 
        Route::controller(ModeratorController::class)->group(function() {
            Route::get("/moderator/profile","loadModeratorProfile")->name("moderator.profile");
        });
    });



    #=== Routes for Doubts ===#
    Route::controller(DoubtController::class)->group(function() {
        // route for load doubts details
        
    });



    
});


