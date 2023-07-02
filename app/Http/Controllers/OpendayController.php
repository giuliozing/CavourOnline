<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Finestreopenday;
use App\Models\Prenotazioni;

class OpendayController extends Controller
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
    public function postiliberi(Request $request){
        $mappaore = Finestreopenday::select("fascia")->where('posti','>',0)->get();
        
        return [ "mappaore"=> $mappaore];
    }
    public function richiediposto(Request $request){
        $numeroposti = Finestreopenday::select("posti")->where('fascia','=', $request->fasciaoraria)->first();
        if( $numeroposti['posti'] == 0) return "Posti Esauriti";
        $tempo = time();
        Prenotazioni::create([
            'Nomestudente' => $request->nomestud,
            'Cognomestudente'=>$request->cognomestud,
            'Nomegenitore' => $request->nomegen,
            'Cognomegenitore'=>$request->cognomegen,
            'Email' => $request->email,
            'Fascia' => $request->fasciaoraria,
            'Tempo' => $tempo
        ]);
        $to = $request->email;
        $subject = "Open Day - Cavour Online";
        $txt = "Benvenuto! Clicca su questo link per completare la prenotazione: https://cavouronline.altervista.org/openday/conferma/$tempo/$to";
        $headers = "From: noreply@cavour.online";
        mail($to,$subject,$txt,$headers);
        return ['message' => 'Prenotazione inserita con successo'];
    }
    public function confermaposto(Request $request){
        $prenotazione = Prenotazioni::select("*")->where('Email','=', $request->email)->where("Tempo", "=", $request->tempo)->where("Confermato", "=", 0)->get();
        if(count($prenotazione)===1) {
            $posti = Finestreopenday::select("*")->where('fascia','=', $prenotazione[0]['Fascia'])->first();
            if($posti['posti']===0) return "Posti Esauriti";
            $prenotazionen = Prenotazioni::find($prenotazione[0]["id"]);
             $nposti = $posti['posti'];
            $posti->update(["posti"=>$nposti-1]);
           $prenotazionen->Confermato = 1;
           $save = $prenotazionen->save();
           $to = $prenotazionen->Email;
           $subject = "Open Day - Cavour Online";
           $txt = "La tua prenotazione è stata confermata. Ti aspettiamo al Liceo Cavour. Prima della visita vi invitiamo a leggere le norme presenti al link http://cavouronline.altervista.org/openday/dettagli";
           $headers = "From: noreply@cavour.online";
           mail($to,$subject,$txt,$headers);
           return ['message' => 'Prenotazione confermata con successo'];
        }
        return "Non ti conosco";
    }
    /*public function imieitutoraggi(Request $request)
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
    }*/
}
