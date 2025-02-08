<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

Route::get('/following', [HomeController::class, 'follow'])->name('following');

Route::get('/advanced-search', [HomeController::class, 'advancedSearch'])->name('advanced-search');

Route::get('/create-project', [HomeController::class, 'createProject'] )->name('create-project');

Route::get('/list-project', [HomeController::class, 'listProject'])->name('list-project');

Route::get('/settings', [HomeController::class, 'settings'])->name('settings');