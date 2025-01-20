<?php

namespace App\Providers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('isAdmin', function(User $user){
            return $user->role === "admin";
        });

        Gate::define('isModerator', function(User $user){
            return $user->role === "moderator";
        });
    
        Gate::define('isSolver', function(User $user){
            return $user->role === "solver";
        });
        
         Gate::define('isStudent', function(User $user){
            return $user->role === "student";
        });


        // share assets url
        Inertia::share([
            'env' => [
                'ASSETS_URL' => env('ASSETS_URL', 'http://localhost:8000/storage'),
            ],
        ]);
        
    }
}
