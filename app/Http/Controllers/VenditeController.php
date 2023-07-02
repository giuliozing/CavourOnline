<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Libri;
use App\Models\Vendite;

class VenditeController extends Controller
{
    public function vendi(Request $request)
    {   
        Vendite::create([
            'idvenditore' => auth('api')->user()['id'],
            'nomevenditore'=>auth('api')->user()['name'],
            'note' => $request->note,
            'isbn' => $request->isbn,
        ]);
        return ['message' => 'Annuncio inserito con successo'];
    }
   
            public function lemievendite(Request $request)
            {   
                $idutente = auth('api')->user()['id'];
                $annunci = Vendite::select("id", "isbn")
                ->where('idvenditore', '=',"$idutente" )->get();
                return $annunci;
            }
            public function elimina(Request $request){
                $result = Vendite::destroy($request->id);
        if ($result) {
            return ["Success"=> true];
        }
        return ["Success"=>false];
            }
            public function cercavendita(Request $request)
            {   
                $annunci = Vendite::select("idvenditore", "note", "nomevenditore")
                ->where('isbn', '=', "{$request->isbn}")->get();
                return $annunci;
            }
            public function vedivendita(Request $request)
            {   
                $annunci = Vendite::select("*")
                ->where('id', '=', "{$request->id}")->get();
                return $annunci;
            }
        }
