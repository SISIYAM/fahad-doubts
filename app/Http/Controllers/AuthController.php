<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\TempUser;
use App\Models\StudentClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{




    /**
     * Global send_sms function for this controller
     */
    protected function send_sms($message, $numbers)
    {
        $url = "http://bulksmsbd.net/api/smsapi"; 
        $api_key = env('SMS_API_KEY');
        $senderid = env('SMS_SENDER_ID'); 

       
        $data = [
            "api_key" => $api_key,
            "senderid" => $senderid,
            "number" => $numbers, 
            "message" => $message 
        ];

        // Initialize cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url); 
        curl_setopt($ch, CURLOPT_POST, 1); 
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 

        // Execute the API call
        $response = curl_exec($ch);

        // Close cURL
        curl_close($ch);

        // Return the API response
        return $response;
    }


    /**
     * Global verify otp function for this controller
     */
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
        $classes = StudentClass::where('status','1')->get();
        return Inertia::render("authentication/Registration",['classes' => $classes]);
    }

    // function for load loadVerifyOtpForm
    public function loadVerifyOtpForm() {
        return Inertia::render("authentication/OtpPage");
    }

    // function for load loadSetPasswordForm
    public function loadSetPasswordForm() {
        return Inertia::render("authentication/SetPassword");
    }

    // function for validate and register account
    public function registration(Request $req){

        // validate form input
        $validated = $req->validate([
            'name' => 'string|required|min:2',
            'email' => 'string|email|required',
            'mobile' => 'string|numeric',
            'institue' => 'string',
            'class' => 'string',
        ]);

       try {
        
        // generate otp
        $otp = rand(1111,9999);
        $otp_expires_at = Carbon::now()->addMinutes(5);

        // Prepare message
        $expiryTime = $otp_expires_at->format('l, F j, Y g:i A');
        $message = "Your OTP for account verification is {$otp}. This code will expire in {$expiryTime}. Please enter it to verify your mobile number. Do not share this OTP with anyone.";

        $validated['otp'] = $otp;
        $validated['otp_expires_at'] = $otp_expires_at;

        // prepare number for send otp
        $numbers = [$req->mobile];
        // send otp
        $this->send_sms($message, $numbers);
 

        $user = TempUser::create($validated);

       
        // after send otp redirect to route

        return to_route('load.otp.form')->with([
            'user_id' => $user->id,
            'message' => "We have sent a 4-digit OTP to your mobile number " . $validated['mobile'] . ". Please enter the OTP below to verify your account and set your password."
        ]);
        
       } catch (\Exception $e) {
        return $e;
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
            
            $user = TempUser::where('id',$req->user_id)->first();  
           
            // return $this->isOtpValid($user, $req->otp);
            if ($this->isOtpValid($user, $req->otp)) {
                return to_route("load.set.password.form")
                ->with(['message' => 'Please set a new password for your account to complete the verification process.','user_id' => $user->id]);

            } else {
                // If OTP is invalid or expired
                return to_route('load.otp.form')->with([
                    'user_id' => $user->id,
                    'error_message' => "Invalid or expired OTP"
                ]);
              
            }
    
        } catch (\Exception $e) {
            return $e;
            return to_route("auth.registration.form")->with('error', 'An error occurred while verify otp.');
        }
    }


    // method for final signup of a student
    public function signUp(Request $req) {
        $validated = $req->validate([
            'password' => 'required|string|min:4',
            'confirm_password' => 'required|string|min:4', 
        ]);
        
        if($req->user_id == "timeout"){
            return to_route("auth.registration.form")->with('error', 'Session Expired! Try again');
        }

        try {
            // fetch the temp user
            $temp_user = TempUser::where('id',$req->user_id)->first(); 
            
             // check if email or mobile already exists in User table
            $existing_user = User::where('email', $temp_user->email)
            ->orWhere('mobile', $temp_user->mobile)
            ->first();

            if ($existing_user) {
                return to_route("auth.login")->with('error', 'An account with this email or mobile already exists. Please log in.');
            }

            $userDetails = [
                "name" => $temp_user->name,
                "email" => $temp_user->email ,
                "password" => $validated['password'] ,
                "mobile" => $temp_user->mobile ,
                "institue" => $temp_user->institue ,
                "class" => $temp_user->class ,
            ];

            $user = User::create($userDetails);

            // Log in the user
            Auth::login($user);

            // delete temporary user
            $temp_user->delete();

            // Redirect to dashboard
            return to_route("dashboard");
    
        } catch (\Exception $e) {
            return $e;
            return to_route("load.set.password.form")->with('error', 'An error occurred while signup.');
        }
         
    }

    // method for change user password
    public function changePassword(Request $req) {
        // Validate the input data
        $validated = $req->validate([
            'oldPassword' => 'required|string',
            'newPassword' => 'required|string',
        ]);
        try {
            
    
            // Get the currently authenticated user
            $user = User::where('id',$req->user_id)->first();
    
            // Check if the old password matches the one in the database
            if (!Hash::check($req->oldPassword, $user->password)) {

                return to_route("student.profile")->with("error", "The provided old password is incorrect.");
            }
    
            // update the password
            $user->password = Hash::make($req->newPassword); 
            $user->save(); 
    
            return to_route("student.profile")->with("success", "Password changed successfully.");
            
        } catch (\Exception $e) {
            
            return to_route("student.profile")->with("error", "An error occurred: " . $e->getMessage());
        }
    }

}
