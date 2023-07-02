<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Libri;
use App\Models\Tutor;
use App\Http\Controllers\UserVariables;
use App\Http\Controllers\LibriController;
use App\Http\Controllers\VenditeController;
use App\Http\Controllers\TutorController;
use App\Http\Controllers\OpendayController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); inutile*/
Route::post('/preregister', [UserVariables::class, 'preregister']);
Route::get('/confirm', [UserVariables::class, 'confirm']);
Route::get('/creahash', [UserVariables::class, 'creahash']);
Route::get('/trovaimmagine', [UserVariables::class, 'trovaimmagine']);
Route::get('/prendiimg', [UserVariables::class, 'prendiimg']);
Route::post('/finalize', [UserVariables::class, 'finalize']);
Route::post('/login', [UserVariables::class, 'login']);
Route::middleware('jwt.auth')->get('/me', [UserVariables::class, 'me']);
Route::middleware('jwt.auth')->get('/inviamail', [UserVariables::class, 'inviamail']);
Route::middleware('jwt.auth')->get('/ricerca', [UserVariables::class, 'ricerca']);
Route::middleware('jwt.auth')->get('/visualizza', [UserVariables::class, 'visualizza']);
Route::middleware('jwt.auth')->get('/aggiungi', [LibriController::class, 'aggiungi']);
Route::middleware('jwt.auth')->get('/vediseesiste', [LibriController::class, 'vediseesiste']);
Route::middleware('jwt.auth')->get('/mostralibri', [LibriController::class, 'mostralibri']);
Route::middleware('jwt.auth')->get('/vendi', [VenditeController::class, 'vendi']);
Route::middleware('jwt.auth')->get('/lemievendite', [VenditeController::class, 'lemievendite']);
Route::middleware('jwt.auth')->delete('/elimina', [VenditeController::class, 'elimina']);
Route::middleware('jwt.auth')->get('/cercavendita', [VenditeController::class, 'cercavendita']);
Route::middleware('jwt.auth')->get('/vedivendita', [VenditeController::class, 'vedivendita']);
Route::middleware('jwt.auth')->get('/cercatutor', [TutorController::class, 'cercatutor']);
Route::middleware('jwt.auth')->get('/imieitutoraggi', [TutorController::class, 'imieitutoraggi']);
Route::middleware('jwt.auth')->delete('/eliminatutoraggio', [TutorController::class, 'eliminatutoraggio']);
Route::middleware('jwt.auth')->get('/aggiungitutoraggio', [TutorController::class, 'aggiungitutoraggio']);
Route::get('/postiopenday', [OpendayController::class, 'postiliberi']);
Route::post('/prenotaopenday', [OpendayController::class, 'richiediposto']);
Route::get('/confermaopenday', [OpendayController::class, 'confermaposto']);