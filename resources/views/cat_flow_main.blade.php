<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <script type="text/javascript" src="{{asset('js\jquery-3.5.1.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js\Snap.svg-0.5.1\dist\snap.svg.js')}}"></script>
        <script src="{{asset('js\SmoothScroll.js')}}"></script>
        <script type="text/javascript" src="{{asset('js\Snap.svg-0.5.1\dist\preload\cat_flow.js')}}"></script>
        <script src="{{asset('js\Snap.svg-0.5.1\dist\preload\counting_function.js')}}"></script>
        <script src="{{asset('js\Snap.svg-0.5.1\dist\preload\little_items.js')}}"></script>
        <link href="{{asset('css\page_cat_style.css')}}" rel="stylesheet" type="text/css">
    </head>
    <header>
    </header>
<!--畫面視覺編輯區---------------------------------------------->
    <body class="body">
         <!--貓手區(fixed固定版面)-->
        <div>
            <svg class="cathands" id="orange_hand"></svg>
            <svg class="cathands" id="rock_hand"></svg>
            <svg class="cathands" id="fist_hand"></svg>
            <svg class="cathands" id="white_hand"></svg>
            <svg class="cathands" id="zoom_in_c"></svg>
            <svg class="cathands" id="m_move"></svg>
        </div>
<!--第1大段---------------------->
<div class="div_n1">
        <!--頂部標題---------------------->
        <div class="div_top">
            <h3 class="h3">選擇你支持的粽子</h3>
        </div>
        <!--中間投票區-------------------->
        <div class="div_election" >
            <!--粽子按鈕-->
                <!--南粽-->
                <div>
                    <div class="S_zong_word">
                    <h3>南部粽</h3>
                    </div>
                    <div id="scrollToScore" class="S_zong_div">
                        <svg class="S_zong_btn" id="S_zong"></svg>
                    </div>
                </div>
                <!--屈原-->
                <div class="div_center" >
                    <svg class="main_cat" id="cat_center"></svg>
                </div>
                <!--北粽-->
                <div>
                    <div class="N_zong_word">
                    <h3>北部粽</h3>
                    </div>
                    <div class="N_zong_div">
                            <svg class="N_zong_btn" id="N_zong"></svg>
                    </div>
                </div>
        </div>
        <!--下端中文標題----------------------->
        <div class="div_bottom">
            <h2 class="h2">端午節戰南北</h2>
        </div>
</div> 
<!--第2大段(過度段)---------------------->
<div  class="sec23_combine">
    <div class="section2">
        <div><svg class="wave_class" id="wave-1"></svg></div>
        <div><svg class="wave_class_2" id="wave-2"></svg></div>
        <div><svg class="wave_class_3" id="wave-3"></svg></div>
    </div>
<!--第3大段---------------------->
    <!--比數顯示區-->
    <div class="goal_bg">
        <div class="cloud">
            <img style="width:100%; overflow: hidden" src="{{asset('pics\for_arena_cloud.png')}}">
        </div>
            <div class="notice">到貓咪那邊選肉粽吧!
            </div>
            <div id="right_now_score" class="live_goal">
                    <!--飆數字-->
                    <!--左邊南粽票數-->
                    <div class="SN_zong_score_board">
                        <h4 class="score">南粽</h4>
                        <h4 id="s_count_up" class="score_number"></h4>
                    </div>
                    <!--對波圖-->
                        <svg class="arena_center" id="fight"></svg>
                    <!--右邊北粽票數-->
                    <div class="SN_zong_score_board">
                        <h4 class="score">北粽</h4>
                        <h4 id="n_count_up" class="score_number"></h4>
                    </div>
            </div>
        <div class="sun_outside">
            <svg class="sun_outside_in" id="sun"></svg>
        </div>
    </div>
    
    
    <!--下滑svg-->
    <div class="little_drop_zong">
        <svg style="width:100px; z-index: 2" id="drop_zong"></svg>
    </div>

 <!--分隔線-->
    <div >
        <img class="divide_arc" src="{{asset('pics/devider.png')}}">
    </div>
</div>

<!--第4大段---------------------->
<div class="explore_div">
    <!--段落標題-->
    <div class="title_of_section_4">
    <h4 class="h4">快來看看</h4>
    <h4 class="h4 sub_h4">跟你站在同一陣線的店家!!</h4>
    <div style="height: 2vh"></div>
    <h4 class="h4 sub_h4">多項好康等著你!!</h4>
    </div>
    <!--合作商家介紹-->
    <!--南粽------------------->
        <div class="info_card_l">
        <img class="store_Szong_party" src="{{asset('pics\stores\ppt zongs_sz.png')}}">
                    <svg id="Szong_party_bg"></svg>
            <div class="info_card_inside">
                <div class="store_artile">
                    <h3 class="store_name">南部粽戰隊</h3>
                    <p class="store_content">
                        Q彈蒸煮南部粽<br>
                        香黏香黏好味道
                    </p>
                </div>
                <a style="text-decoration: none; color: black" href="https://bearmochi.com/project/db_stores/#south">
                        <button class="custom-btn btn-14">
                        <strong>支持南部粽!!</strong>
                        </button>
                </a>
                <img class="store_img_r" src="{{asset('pics\stores\e_cake_amigo_fin.png')}}">
        </div>
        </div>

    <!--北粽------------------------>
        <div class="info_card_r">
        
        <img class="store_Nzong_party" src="{{asset('pics\stores\ppt zongs_nz.png')}}"/>
            <svg id="Nzong_party_bg"></svg>
            <div class="info_card_inside">
                    <img class="store_img" src="{{asset('pics\stores\e_shot_loft_fin.png')}}">
                <a style="text-decoration: none; color: black" href="https://bearmochi.com/project/db_stores/#north">
                    <button class="custom-btn btn-14">
                    <strong>北部粽讚啦!!</strong>
                    </button>
                </a>
                <div class="store_artile_r">
                    <h3 class="store_name">北部粽戰隊</h3>
                    <p class="store_content">
                        先滷後炒大爆香<br>
                        油飯加熱超好吃
                    </p>
                </div>
            </div>
        </div>

   



<!--第5大段------------------------->
<!--活動規範------------------------->
    <!--空白空間------------------------->
    <div id="blank_space-1"></div>
    <!--規範內容------------------------->
    <div class="detail_div">
        <h3 class="rule">活動規範</h3>
        <!--活動時間----->
        <div class="col-container">
            <h3 class="col-header">活動時間:</h3>
            <p class="col-content">2023/6/1~2023/6/30</p>
        </div>
        <!--活動方法----->
        <div class="col-container">
            <h3 class="col-header">活動方法:</h3>
            <p class="col-content">於對應店家出示本活動之電子優惠券，<br>即可享受對應店家之端午活動優惠</p>
        </div>
        <!--優惠券----->
        <div class="col-container">
            <h3 class="col-header">優惠券使用規範:</h3>
        </div>
        <div class="col-container">
            <h3 class="col-header">有效期限：</h3>
            <p class="col-content">此優惠卷的有效期限為5月25日至6月30日。</p>
        </div>
        <div class="col-container">
            <h3 class="col-header">使用限制：</h3>
            <p class="col-content">此優惠卷每次消費限使用一次，<br>
                                    不能與其他優惠或促銷活動同時使用。</p>
        </div>
        <div class="col-container">
            <h3 class="col-header">兌換規範：</h3>
            <p class="col-content">優惠卷不能兌換現金，僅用於在購買商品或服務時抵扣相應金額。<br>
                                    優惠卷本身沒有任何現金價值，不能退款或兌換成現金。
                                </p>
        </div>
        <!--聲明----->
        <div class="col-container">
            <p class="col-content">(Match19保有隨時修改及終止本活動之權利，<br>
                                    如有任何變更內容或詳細注意事項將公布於官方line，恕不另行通知。)</p>
        </div>
        <div class="col-container">
            <p class="col-content">請您在使用優惠卷前，仔細閱讀我們網頁上的優惠卷使用規範，<br>
                                    以確保您的消費順利享受相應的折扣或優惠。<br>
                                    如果您有任何疑問或需要進一步的協助，請隨時聯繫我們。<br>
                                    Match19祝您端午快樂！！
            </p>
        </div>
    </div>
    <div class="ad">
        <a class="ad" href="https://newmatch19.com">也想要擁有這麼有趣的網站或活動嗎?<br> 快聯繫Match19吧!!</a>
    </div>
    <!--空白空間------------------------->
    <div id="blank_space-2"></div>
</div>
</body>

<!--頁腳外鍊資訊------------------------->
<footer class="footer">
    <div class="footer_d">
        <h5 class="footer_content">power & design body
        <a class="footer_content" href="https://id.newmatch19.com">Match19</a></h5>
    </div>
</footer>
<!--滑鼠貓手裝飾------------------------->
<img id="sle-follow" src="{{asset('pics\ctm.png')}}" alt="Image" />

</html>