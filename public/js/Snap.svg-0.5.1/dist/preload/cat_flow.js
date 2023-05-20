window.onload = function () {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
    /*以上為移動設備檢測功能----------------------------------- */


/*轉場圓圈區*/
    var zoom_in_c = Snap("#zoom_in_c");
    var ziC = zoom_in_c.circle("50%", "50%", r=500);
                    ziC.attr({ 
                    stroke: '#4DC47D', 
                    'strokeWidth': 1000,
                    fill: '#ffffff00' });
        // 使用 Snap.svg 提供的动画函数
        ziC.animate({ r: 2000 }, 500, null);
    
/*-第1大段動畫效果------------------------------------------------ */
/*動畫狀態判定區-------------*/
    //進場動畫判定式--只有需要if判定的動畫我才有設定，除此之外都用tiimeout調整時間//
    //屈原進場
    var zoom_in_fin = false; //初始值设为false


/*屈原動畫設定區-------------*/
    var catC = Snap("#cat_center");
    //屈原出場動畫
    var cx = 140, cy = 140;
    var animescale = function() {
        var pic = catC.image("pics/cu_ver3.svg", 10, 10, 280, 280); // 设置图像宽度和高度
        Snap.animate(0, 1, 
            //zoom in 進場
            function(scale){
            var s_m = Snap.matrix();
                s_m.scale(scale, null, cx, cy);
            pic.transform(s_m);
            },
             1000, mina.easeinout,//動畫時長
             function() {
                //动画结束后开始漂浮动画
                zoom_in_fin = true;
              }
        );
    };
    

    //屈原漂浮動畫
    var moveDown = true;

    chu_float = setInterval(function() {
        if (zoom_in_fin) { //判定animescale动画是否结束
            if (moveDown == true) { 
                catC.animate({transform: 't0,10'}, 2000, mina.easeinout);
                moveDown = false;
            } else {
                catC.animate({transform: 't0,-10'}, 2000, mina.easeinout);
                moveDown = true;
                }
            }
    }, 2000);

/*南北粽按鈕 */
    //南粽
    var S_zong = Snap("#S_zong");
        Sz_img = S_zong.image("pics/zong.svg", 0, 0, 200, 200);
        var scx = 100, scy = 100;

        //hover scale up
        function sscale_up(){
            var Sz_m = new Snap.Matrix();
            Sz_m.scale(1.5,1.5,scx,scy);
            Sz_img.animate({ transform: Sz_m }, 500, mina.easeinout);
        };

        //hover scale down
        function sscale_down(){
            var Sz_m = new Snap.Matrix();
            Sz_m.scale(1,1,scx,scy);
            Sz_img.animate({ transform: Sz_m }, 500, mina.easeinout);
        };

        S_zong.hover(
            //hover function
            function(){sscale_up()},
            //unhover function
            function(){sscale_down()}
        );
        
    //北粽
    var N_zong = Snap("#N_zong");
    Nz_img = N_zong.image("pics/N_zong.svg", 0, 0, 200, 200);
    var Ncx = 100, Ncy = 100;

    //hover scale up
    function Nscale_up(){
        var Nz_m = new Snap.Matrix();
        Nz_m.scale(1.5,1.5,Ncx,Ncy);
        Nz_img.animate({ transform: Nz_m }, 500, mina.easeinout);
    };

    //hover scale down
    function Nscale_down(){
        var Nz_m = new Snap.Matrix();
        Nz_m.scale(1,1,Ncx,Ncy);
        Nz_img.animate({ transform: Nz_m }, 500, mina.easeinout);
    };

    N_zong.hover(
        //hover function
        function(){Nscale_up()},
        //unhover function
        function(){Nscale_down()}
    );

/*其他貓手區---------------*/

/*貓手進場區-- */
    //右橘貓手手進場
    var org_hand = Snap("#orange_hand");
            oh_img = org_hand.image("pics/cat-hand_orange-hand.png", '100%','100%',454/3,857/3);
            var oh_in = function(){
                Snap.animate(0,1,
                    function(step){
                        var oh_m = new Snap.Matrix();
                        oh_m.translate(-step * 150, -step * 350);
                        oh_img.transform(oh_m);
                    },350, mina.easeinout)//動畫時長
            };
    //搖滾手手進場
    var rock_hand = Snap("#rock_hand");
            rock_img = rock_hand.image("pics/cat-hand_rock_hand.png", '80%', '100%',629/3,851/3);
            var rh_in = function(){
                Snap.animate(0,1,
                    function(step){
                        var rh_m = new Snap.Matrix();
                        rh_m.translate(-step * 90, -step * 250);
                        rock_img.transform(rh_m);
                    },350, mina.easeinout)//動畫時長
            };
    //握拳手手進場
    var fist_hand = Snap("#fist_hand");
            fist_img = fist_hand.image("pics/cat-hand_fist.png", '0%', '100%',596/3,842/3);
            var fh_in = function(){
                Snap.animate(0,1,
                    function(step){
                        var fh_m = new Snap.Matrix();
                        fh_m.translate(step * 90, -step * 250);
                        fist_img.transform(fh_m);
                    },350, mina.easeinout)//動畫時長
            };
    //白手手進場
    var white_hand = Snap("#white_hand");
            white_img = white_hand.image("pics/cat-hand_white_hand.png", '-20%', '100%',436/3,803/3);
            var wh_in = function(){
                Snap.animate(0,1,
                    function(step){
                        var wh_m = new Snap.Matrix();
                        wh_m.translate(step * 225, -step * 350);
                        white_img.transform(wh_m);
                    },350, mina.easeinout)//動畫時長
                };


//動畫操作時間表
    
    oh_in();//橘手手
    setTimeout(rh_in, 250);//搖滾手手
    setTimeout(fh_in, 500);//握拳手手
    setTimeout(wh_in, 750);//白手手
    setTimeout(animescale, 1000);//屈原出場時間

/*滑鼠跟隨特效 */
// 定義滑鼠移動事件處理程序
var m_move = Snap("#m_move");
            test_g = m_move.group( rock_hand, fist_hand);
var mouse_m = function(ev){
        var dx = ev.mozMovementX || ev.movementX || 0;
        //console.log('dx: ' + dx ); //在後端顯示滑鼠運動紀錄，需要校正時再打開
        var mouse_mix = new Snap.Matrix();
        mouse_mix.translate(dx/10, null);
        test_g.transform(mouse_mix);
        };
            
//功能綁定
m_move.mousemove(mouse_m);

/*-第2大段動畫效果------------------------------------------------ */
/*wave1*/
var wave1 = Snap("#wave-1");
    var w1_img = wave1.image("pics/dboat_tran_div.png", 0, 0, '100%', '100%');
    var w1_max = 550; // 停止滚动的最大滚动距离
    window.addEventListener('scroll', function () {
    // 获取窗口垂直滚动距离
    var w1_scr = window.scrollY;

    // 计算 SVG 元素应该移动的距离
    var w1_mov = -(w1_scr * 0.5); // 可根据需要调整移动距离

    // 如果 SVG 元素已经到达页面顶部，则停止移动
    if (w1_scr >= w1_max) {
        w1_mov = -(w1_max * 0.5); // 移动到指定位置
    }

    // 使用 Snap.svg 的 transform 方法移动 SVG 元素
    wave1.transform('translate(0,' + w1_mov + ')');
    });
 

/*wave2*/
var wave2 = Snap("#wave-2");
    var w2_img = wave2.image("pics/dboat_tran_div_2.png", 0, 0, '100%', '100%');
    var w2_max = 600; // 停止滚动的最大滚动距离
    window.addEventListener('scroll', function () {
    // 获取窗口垂直滚动距离
    var w2_scr = window.scrollY;

    // 计算 SVG 元素应该移动的距离
    var w2_mov = -(w2_scr * 1.7); // 可根据需要调整移动距离

    // 如果 SVG 元素已经到达页面顶部，则停止移动
    if (w2_scr >= w2_max) {
        w2_mov = -(w2_max * 1.7); // 移动到指定位置
    }

    // 使用 Snap.svg 的 transform 方法移动 SVG 元素
    wave2.transform('translate(0,' + w2_mov + ')');
    });

/*wave3*/
var wave3 = Snap("#wave-3");
    var w3_img = wave3.image("pics/dboat_tran_div_3_ver2.png", 0, 0, '100%', '100%');
    var w3_max = 900; // 停止滚动的最大滚动距离
    window.addEventListener('scroll', function () {
    // 获取窗口垂直滚动距离
    var w3_scr = window.scrollY;

    // 计算 SVG 元素应该移动的距离
    var w3_mov = -(w3_scr * 2.55); // 可根据需要调整移动距离

    // 如果 SVG 元素已经到达页面顶部，则停止移动
    if (w3_scr >= w3_max) {
        w3_mov = -(w3_max * 2.55); // 移动到指定位置
    }

    // 使用 Snap.svg 的 transform 方法移动 SVG 元素
    wave3.transform('translate(0,' + w3_mov + ')');
    });
    


/*---移動設備檢測功能---------------------------------------------------------- */
}
};
                  