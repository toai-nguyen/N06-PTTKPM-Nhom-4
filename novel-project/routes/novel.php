<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NovelController;

// các route cần thiết:
// 1. add new novel
// 2. update novel 
// 3. delete novel
// 4. view novel
// 5. sort novel (advanced search)

Route::get('/', [NovelController::class, 'index'])->name('home');

// View a novel
Route::get('/novels/{novel_id}', [NovelController::class, 'show'])->name('view-novel');

//add new novel 
Route::post('/novels/add', [NovelController::class, 'store'])->name('add-novel');
//update novel
Route::put('/novels/update/{id}', [NovelController::class, 'update'])->name('update-novel');
//delete novel
Route::delete('/novels/delete/{id}', [NovelController::class, 'destroy'])->name('delete-novel');
//list novel using follow rate
Route::get('/novels', [NovelController::class, 'index'])->name('list-novel');
//sort novel using advanced search
Route::get('/novels/search', [NovelController::class, 'search'])->name('search-novel');