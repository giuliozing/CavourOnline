<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Libri;

class LibriController extends Controller
{
    public function aggiungi(Request $request)
    {   
        Libri::create([
            'autori' => $request->autori,
            'titolo' => $request->titolo,
            'isbn' => $request->isbn,
        ]);
        return ['message' => 'Libro inserito con successo'];
    }
    public function vediseesiste(Request $request)
    {   
        $libro = Libri::select("*") 
            ->where('isbn', '=', "{$request->isbn}")->get();
            if(count($libro)===1){
                return ["Esiste"=>true];
            }
        return ['Esiste' => false];
    }
    public function mostralibri(Request $request){
        $libro = Libri::select("*")
            ->where('isbn', '=', "{$request->isbn}")->first();
        return $libro;
    }
}
