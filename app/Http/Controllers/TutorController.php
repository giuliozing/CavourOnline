<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Tutor;

class TutorController extends Controller
{
    /*public function aggiungi(Request $request)
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
    }*/
    public function cercatutor(Request $request){
        $tutor = Tutor::select("*")
            ->where('materia', '=', "{$request->materia}")->where('anno', '=', "{$request->anno}")->limit(6)->get();
        return $tutor;
    }
    public function imieitutoraggi(Request $request)
    {   
        $idutente = auth('api')->user()['id'];
        $tutoraggi = Tutor::select("id", "materia", "anno")
        ->where('idtutor', '=',"$idutente" )->get();
        return $tutoraggi;
    }
    public function aggiungitutoraggio(Request $request)
    {   
        Tutor::create([
            'idtutor' => auth('api')->user()['id'],
            'nome'=>auth('api')->user()['name'],
            'anno' => $request->anno,
            'materia' => $request->materia,
        ]);
        return ['message' => 'Tutoraggio inserito con successo'];
    }
    public function eliminatutoraggio(Request $request){
        $result = Tutor::destroy($request->id);
if ($result) {
    return ["Success"=> true];
}
return ["Success"=>false];
    }
}
