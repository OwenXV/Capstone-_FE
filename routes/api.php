<?php

use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\RevController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/upload', [ImageController::class, 'upload']);
Route::get('items', [ItemController::class, 'index']);
Route::get('items/{name}', [ItemController::class, 'search']);
Route::get('items/{category}', [ItemController::class, 'searchCategory']);
Route::get('items/{id}', [ItemController::class, 'show']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('users', [UserController::class, 'index']);
Route::get('/image/{image}', [ImageController::class, 'getImage'])->where('image', '.*');
Route::get('/profile_picture/{image}', [AuthController::class, 'getImage'])->where('profile_picture', '.*');

Route::group(['middleware' => ['auth:sanctum']], function() {
Route::post('/logout', [AuthController::class, 'logout']);
Route::put('/users/profile', [UserController::class, 'updateProfilePicture']);
Route::post('/items', [ItemController::class, 'store']);
Route::put('/items/{id}', [ItemController::class, 'update']);
Route::resource('reviews', RevController::class);
Route::get('/items/user/{id}',[ItemController::class, 'getUserItems']);





});



