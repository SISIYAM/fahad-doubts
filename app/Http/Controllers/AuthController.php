<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{

    protected function isOtpValid($user, $otp) {
        return $user->otp == $otp && Carbon::now()->lessThanOrEqualTo($user->otp_expires_at);
    }
  
    // function for load login form
    public function loadLoginForm() {
        if(Auth::check()){
            return to_route("dashboard");
        }
        return Inertia::render("authentication/Login");
    }

    // function for load registration form
    public function loadRegistrationForm() {
        if(Auth::check()){
            return to_route("dashboard");
        }
        return Inertia::render("authentication/Registration");
    }

    // function for validate and register account
    public function registration(Request $req){

        // validate form input
        $validated = $req->validate([
            'name' => 'string|required|min:2',
            'email' => 'string|email|required|unique:users',
            'mobile' => 'string|numeric|unique:users',
            'institue' => 'string',
            'class' => 'string',
        ]);

       try {
        
        // generate otp
        $otp = rand(1111,9999);
        $otp_expires_at = Carbon::now()->addMinutes(5);

        $validated['otp'] = $otp;
        $validated['password'] = uniqid();
        $validated['otp_expires_at'] = $otp_expires_at;

        $user = User::create($validated);
        
        return Inertia::render("authentication/OtpPage",['user_id' => $user->id,'message' => "We have sent a 4-digit OTP to your mobile number"." ".$validated['mobile']."."."Please enter the OTP below to verify your account and set your password."]);

        
       } catch (\Exception $e) {
        return to_route("auth.registration.form")->with('error', 'An error occurred while registration.');
       }
    }

    // function for login
    public function login(Request $req){
        
        $req->validate([
            'login' => 'string|required',
            'password' => 'string|required',
        ]);
        
         // Determine if the input is an email or mobile number
        $loginField = filter_var($req->login, FILTER_VALIDATE_EMAIL) ? 'email' : 'mobile';

        $credential = [
            $loginField => $req->login,
            'password' => $req->password,
        ];

        
      
        if (Auth::attempt($credential)) {
            $user = Auth::user();
           
            // check if the user's status is active
            if ($user->status == 1) {
                return to_route('dashboard');
            } else {
                // if status is 0, log the user out and redirect with an error
                Auth::logout();
                return to_route('auth.login')->with('error', 'Your account is deactivated. Please contact the administrator.');
            }
        } 
        
        return to_route('auth.login')->with('error', 'Email/Mobile and password are incorrect.');

    }
    

    // method for logout
    public function logout(Request $req){
        $req->session()->flush();
        Auth::logout();
        return to_route('auth.login');
    }


    // method for verify otp
    public function verifyOtp(Request $req) {
        $req->validate([
            'otp' => 'string|required|numeric',
        ]);

        try {
            
            $user = User::where('id',$req->user_id)->first();  
            // return $this->isOtpValid($user, $req->otp);
            if ($this->isOtpValid($user, $req->otp)) {
                return Inertia::render("authentication/setPassword",['message' => 'Please set a new password for your account to complete the verification process.','user_id' => $user->id]);
            } else {
                // If OTP is invalid or expired
                return Inertia::render("authentication/OtpPage",['error' => "Invalid or expired OTP.",'user_id' => $user->id]);
               
            }
    
        } catch (\Exception $e) {
            return to_route("auth.registration.form")->with('error', 'An error occurred while verify otp.');
           }
    }

}
