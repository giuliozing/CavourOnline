<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use GuzzleHttp\Client;

class UserVariables extends Controller
{
    public function feed(){
        $utenti = User::orderBy('views', 'desc')->limit(5)->get();
        $appunti = Appunti::orderBy('created_at', 'desc')->limit(5)->get();
        $petizioni = Petizioni::orderBy('created_at', 'desc')->limit(5)->get();
        return ['success'=>true, 'utenti'=>$utenti, 'appunti'=>$appunti, 'petizioni'=>$petizioni];
    }
    public function preregister(Request $request)
    {
        if (!filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            return ["Success"=>false];
        }
        $result = User::select("*")
            ->where('email', '=', "{$request->email}")->where('password', '=', '')->get();
        if(count($result)!==1){
            return ["Success"=>false];
        }
        // Random, unguessable token: must not be derivable from the email address itself.
        $hashmail = Str::random(40);
        $to = $request->email;
        $subject = "Completa la tua registrazione a Cavour Online";
        $txt = "Benvenuto in Cavour Online! Clicca su questo link per completare la registrazione: https://cavouronline.altervista.org/registrati/$hashmail";
        $headers = "From: noreply@cavour.online";
        mail($to,$subject,$txt,$headers);
        
        $UpdateDetails = User::where('email', '=',  $request->email)->first();
        $UpdateDetails->hash = $hashmail;
        $UpdateDetails->save();
        return ["Success"=>true];
    }
    public function confirm(Request $request){
        $result = User::select("*")
            ->where('hash', '=', "{$request->hash}")->where('password', '=', '')->get();
        if(count($result)!==1){
            return ["Success"=>false];
        }
        return ["Success"=>true];
    }
    public function finalize(Request $request){
        $userdata = User::select("*")
            ->where('hash', '=', "{$request->hash}")->where('password', '=', '')->first();
        if (!$userdata) {
            return ["Success"=>false];
        }
       $userdata->status = $request->status;
       $userdata->instagram = $request->instagram;
       $userdata->phonenumber = $request->phonenumber;
       $userdata->password = Hash::make($request->password);
       // Invalidate the one-time registration token now that it has been used.
       $userdata->hash = Str::random(40);
       $userdata->save();
       return ["Success"=>true];
    }
        /*User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'status' => $request->status
        ]);
        
        return ['message' => 'User created successfully'];*/
    

    public function login(Request $request) //attenzione, configurare sempre Postman senza application/json
    {
    $credentials = request()->only(['email', 'password']); //this method allows you to select certain parametres in the request
    $token = auth('api')->attempt($credentials);
    return ['success' => true, 'token' => $token];
    }

    public function ricerca(Request $request)
    {
        $result = ['success' => true, 'risposta' => []];
        $rexpl = [];
        $go = false;
        /*$classi = ['Prim', 'Second', 'Terz', 'Quart', 'Quint'];
        $sezioni = $this->sezioni;
        if ((strlen($request->ricerca) == 1) && (in_array(strtoupper($request->ricerca), $sezioni))) { //se è stata digitata una sezione, aggiungila all'elenco
            $result['risposta'][] = ['tipo' => 'sezione', 'elem' => strtoupper($request->ricerca), 'nome' => 'Sezione ' . strtoupper($request->ricerca)];
        }
        if (
            (
                (strlen($request->ricerca) == 1) &&
                ($request->ricerca > 0) &&
                ($request->ricerca < 6)) ||
            (in_array(substr(ucfirst($request->ricerca), 0, -1), $classi))
        ) { //se è stata digitata una classe parallela, aggiungila all'elenco
            $nome = substr(ucfirst($request->ricerca), 0, -1) . 'i';
            $elem = array_search(substr(ucfirst($request->ricerca), 0, -1), $classi) + 1;
            if (strlen($request->ricerca) == 1) {
                $nome = $classi[$request->ricerca - 1] . 'i';
                $elem = $request->ricerca;
            }
            $result['risposta'][] = ['tipo' => 'classi_parallele', 'nome' => $nome, 'elem' => $elem];
        }*/
        $nomcogn = User::select("name",  "id", "instagram") //selezione per cognome
            ->where('name', 'LIKE', "%{$request->ricerca}%")
            
            //->orWhere('email', 'LIKE', "{$request->richiesta}%")
            ->limit(6)
            ->get();
        foreach ($nomcogn as $i) {
            $result['risposta'][] = ['tipo' => 'studente', 'nome' => ucfirst($i['name']), 'id' => $i['id'], 'instagram'=>$i['instagram']];
        }
        //selezione per classe
       /* if (strlen($request->ricerca) == 2) {
            $rexpl[0] = $request->ricerca[0];
            $rexpl[1] = $request->ricerca[1];
            $go = true;
        } else if (strlen($request->ricerca) == 3) {
            $rexpl = explode(" ", $request->ricerca);
            $go = true;
        }
        if (
            $go == true &&
            (strlen($rexpl[0] == 1) &&
                ($rexpl[0] > 0) &&
                ($rexpl[0] < 6))
            &&
            (strlen($rexpl[1]) == 1) && (in_array(strtoupper($rexpl[1]), $sezioni))
        ) {
            $result['risposta'][] = ['tipo' => 'classe', 'nome' => $rexpl[0] . ' ' . strtoupper($rexpl[1]), 'elem' => $rexpl[0] . '_' . strtoupper($rexpl[1])];
        }*/
        return $result;
    }
    public function trovaimmagine(Request $request){
        // Restrict to a valid Instagram username to prevent request/path injection.
        if (!preg_match('/^[A-Za-z0-9._]{1,30}$/', (string) $request->account)) {
            return response(['message' => 'Invalid account'], 422);
        }
        $client = new Client();
        $res = $client->request('GET', 'https://instagram.com/'.$request->account."/?__a=1");

        $result= $res->getBody();
        return($result);
    }
    public function prendiimg(Request $request){
        // Only allow fetching from Instagram's CDN hosts to prevent SSRF
        // (arbitrary internal/external URL fetching via user-controlled `link`).
        $host = parse_url((string) $request->link, PHP_URL_HOST);
        $scheme = parse_url((string) $request->link, PHP_URL_SCHEME);
        $allowedHostPattern = '/(^|\.)(cdninstagram\.com|fbcdn\.net)$/i';
        if (!in_array($scheme, ['http', 'https'], true) || !$host || !preg_match($allowedHostPattern, $host)) {
            return response(['message' => 'Invalid link'], 422);
        }
        $client = new Client();
        $res = $client->request('GET', $request->link);
        return $res->getBody();
    }
    /*public function mostra_classe($classe, $sezione)
    {
        $risposta = User::where([
            ['classe', '=', $classe],
            ['sezione', '=', $sezione]
        ])->orderBy('surname', 'asc')->get();
        return ['classe' => $classe . ' ' . $sezione, 'risposta' => $risposta];
    }

    public function singola_classe(Request $request)
    {

        if (strlen($request->ricerca) != 3) {
            return ['success' => false, 'message' => 'Invalid query'];
        }
        $rexpl = explode("_", $request->ricerca);
        $risposta = $this->mostra_classe($rexpl[0], $rexpl[1]);
        return ['success' => true, 'risposta' => $risposta];
    }

    public $sezioni = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    public function classe_parallela(Request $request)
    {
        $risposta = [];
        if (strlen($request->ricerca) != 1) {
            return ['success' => false, 'message' => 'Invalid query'];
        }
        for ($x = 0; $x < count($this->sezioni); $x++) {
            $risposta[] = $this->mostra_classe($request->ricerca, $this->sezioni[$x]);
        }

        return ['success' => true, 'risposta' => $risposta];
    }

    public function sezione(Request $request)
    {
        $risposta = [];
        if (strlen($request->ricerca) != 1) {
            return ['success' => false, 'message' => 'Invalid query'];
        }
        for ($x = 1; $x < 6; $x++) {
            $risposta[] = $this->mostra_classe($x, $request->ricerca);
        }

        return ['success' => true, 'risposta' => $risposta];
    }*/
    public function me()
    {
        $user = auth('api')->user();
        return $user;
    }

    public function visualizza(Request $request)
    {
        $studente = User::find($request->id);
        if ($studente) {
            return ['success' => true, 'studente' => $studente];
        }
        return ['success' => false, 'message' => 'Utente non trovato'];
    }
    public function inviamail(Request $request){
        $studente = User::find($request->id);
        if (!$studente) {
            return null;
        }
        $user = auth('api')->user()['name'];
        if($studente->password!=='' && filter_var($studente->email, FILTER_VALIDATE_EMAIL)){
            $to = $studente->email;
        $subject = "Qualcuno ha visualizzato il tuo numero";
        $txt = "Ti comunichiamo che $user ha visualizzato di recente il tuo numero di telefono. Non rispondere a questa mail: per qualunque problema, contatta i gestori del sito.";
        $headers = "From: noreply@cavour.online";
        mail($to,$subject,$txt,$headers);
        return ["message"=>"Ok"];
    }

        return null;
    }
    /*public function search_users(Request $request)
    {
        $r = [];
        $result = User::select("*")
            ->where('name', 'LIKE', "{$request->richiesta}%")
            ->orWhere('surname', 'LIKE', "{$request->richiesta}%")
            //->orWhere('email', 'LIKE', "{$request->richiesta}%")
            ->limit($request->limite)
            ->get();
       $result = User::where([['name', 'LIKE', "{$request->richiesta}%"]
         ])->orWhere(['surname', 'LIKE', "{$request->richiesta}%"])->limit($request->limite)->get();
      for($i=0;$i<count($result);$i++){
            array_push($r, $result[$i]->name.' '.$result[$i]->surname.' id: '.$result[$i]->id);
}


        //$result = User::where(['nome', 'LIKE', "{$request->query}%"])->get();
        //->orWhere(['cognome', 'LIKE', "{$request->query}%"])->orWhere((['nome'.' '.'cognome', 'LIKE', "{$request->query}%"]))
        //  ->limit(10)->get()->toArray();
        return $r;
    } 

    public function update_status(Request $request)
    {

        $user = auth('api')->user();
        if ($request['status'] != '') {
            $user->status = $request['status'];
            $user->save();
            return ['success' => true, 'newstatus' => $user['status']];
        }
        */

   
}
