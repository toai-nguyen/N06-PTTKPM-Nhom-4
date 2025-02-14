<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChapterController;

Route::get('{novel_id}/chapter/{id}', [ChapterController::class, 'show'])->name('chapter.show');
Route::get('{novel_id}/chapter/{id}/edit', [ChapterController::class, 'edit'])->name('chapter.edit');
Route::patch('{novel_id}/chapter/{id}', [ChapterController::class, 'update'])->name('chapter.update');
Route::delete('{novel_id}/chapter/{id}', [ChapterController::class, 'destroy'])->name('chapter.destroy');
Route::get('{novel_id}/chapter/create', [ChapterController::class, 'create'])->name('chapter.create');
Route::post('{novel_id}/chapter', [ChapterController::class, 'store'])->name('chapter.store');
Route::get('{novel_id}/chapter', [ChapterController::class, 'index'])->name('chapter.index');