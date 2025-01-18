<?php 
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Home Route
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// post Route
Route::get('/post', function () {
    return Inertia::render('Post');
})->name('post'); 
