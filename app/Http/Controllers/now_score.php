<?php

namespace App\Http\Controllers;

use App\Zong_election;
use Illuminate\Http\Request;

class now_score extends Controller
{
    public function nowscore(){
        $Sz_now = Zong_election::orderBy('S_zong', 'desc')->first();
        $Nz_now = Zong_election::orderBy('N_zong', 'desc')->first();

        $Nowdata = [
            's_z' => $Sz_now->S_zong,
            'n_z' => $Nz_now->N_zong
        ];
        return view('cat_flow_main')->with('nowD', $Nowdata);
    }
}
