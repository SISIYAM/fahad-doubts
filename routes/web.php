<?php 
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Home Route
Route::get('/', function () {
    return Inertia::render('Home', [
        'aboutUrl' => route('about'), 
    ]);
})->name('home');

// About Route
Route::get('/about/onek-boro', function () {
    return Inertia::render('About', [
        'homeUrl' => route('home'), 
    ]);
})->name('about'); 
