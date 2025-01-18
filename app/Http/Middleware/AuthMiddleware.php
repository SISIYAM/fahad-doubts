<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            $user = Auth::user();

            // If the user is active, proceed
            if ($user->status == 1) {
                return $next($request);
            }

            // If the user's status is not active (status == 0), log them out
            Auth::logout();

            // Redirect to the login page with an error message
            return to_route('auth.login')->with('error', 'Your account is deactivated. Please contact the administrator.');
        }

        // If the user is not authenticated, redirect to the login page
        return to_route('auth.login')->with('error', 'Please login!');
    }
}
