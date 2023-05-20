<?php

namespace App\Http\Controllers;

use App\Zong_election;
use Illuminate\Http\Request;

class Zong_count extends Controller
{
    public function Szong(){
        //取S最新值
        $Szong_vote = Zong_election::orderBy('S_zong', 'desc')->first();

        //S+1
        $s = $Szong_vote->S_zong + 1;

        //取N最新值
        $Szong_vote = Zong_election::orderBy('N_zong', 'desc')->first();

        //N不變
        $n = $Szong_vote->N_zong;

        //創建新資料
        $Szong_vote = Zong_election::create([ 
            'S_zong' => $s, 
            'N_zong' => $n, 
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        //取最新資料值
        return response()->json([
            'n' => $n,
            's' => $s
        ]);
    }

    public function Nzong(){
        //取S最新值
        $Nzong_vote = Zong_election::orderBy('N_zong', 'desc')->first();

        //S+1
        $n = $Nzong_vote->N_zong + 1;

        //取N最新值
        $Nzong_vote = Zong_election::orderBy('S_zong', 'desc')->first();

        //N不變
        $s = $Nzong_vote->S_zong;

        //創建新資料
        $Nzong_vote = Zong_election::create([ 
            'N_zong' => $n, 
            'S_zong' => $s, 
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        //取最新資料值
        return response()->json([
            'n' => $n,
            's' => $s
        ]);
        //return view('zong_arena')->with('score_data', $ScoreData);

    }

    public function getData(){
        $s_zong = Zong_Election::orderBy('created_at', 'desc')->value('S_zong');
        $n_zong = Zong_Election::orderBy('created_at', 'desc')->value('N_zong');
        return response()->json([
            's_zong' => $s_zong,
            'n_zong' => $n_zong,
        ]);
    }
}
