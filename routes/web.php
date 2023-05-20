<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//過場動畫
Route::get('/db_main', function () {
    return view('db_main');
});

//貓貓首頁
Route::get('/cat_flow_main', 'now_score@nowscore');

//比數頁面
Route::get('/zong_arena', function () {
    return view('zong_arena');
});

/*粽子票選*/
//南粽+1
Route::get('/cat_flow_main/Szong', 'Zong_count@Szong');
//北粽+1
Route::get('/cat_flow_main/Nzong', 'Zong_count@Nzong');

Route::get('cat_flow_main/getData', 'Zong_count@getData');

//Ben add for git demo
Route::get('/4demo/4demo', function () {
    echo 'demo';
});
