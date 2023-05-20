

/*南粽計算-無頁面跳轉 */
$(function() {
    $("#S_zong").click(function(e){
        e.preventDefault();
        $.ajax({
            url:'/cat_flow_main/Szong',
            method:'GET',
            success: function(response) {
                
                //頁面滾動
                var scoreDiv = document.getElementById("right_now_score");
                var scrollToDiv = scoreDiv.getBoundingClientRect().top -50 + window.pageYOffset;
                var currentPosition = window.pageYOffset;
                var distance = scrollToDiv - currentPosition;
                var scrollDuration = 3000; // 滾動持續時間為3秒
                var scrollStep = distance / (scrollDuration / 16.6667); // 每毫秒應滾動的距離
                
                function animateScroll() {
                    currentPosition += scrollStep;
                    window.scrollTo(0, currentPosition);
                    if (currentPosition < scrollToDiv) {
                    requestAnimationFrame(animateScroll);
                    }
                }
                
                animateScroll();
                // 取得數據並顯示alert
                //alert('南粽加一票S_zong: ' + response.s + ', N_zong: ' + response.n);

                    /* 設置對波svg動畫------------------------------ */
                    // 將scoreData.s設定為百分之scoreData.s，而且是基於總投票數的百分比
                    var percent =  (response.s * 100) / (response.s + response.n) + '%';

                        // 建立一個SVG畫布
                    var s = Snap("#fight");
                    console.log(s);
                    // 繪製兩條線段
                    var line1 = s.line('0%', '50%', '0%', '50%');
                    var line2 = s.line('100%', '50%', '100%', '50%');

                    //寬度設定
                    line1.attr({ stroke: "#4FC47D", strokeWidth: 5,  });
                    line2.attr({ stroke: "#F05A24", strokeWidth: 5, });

                    // 設置線段的起始位置
                    line1.attr({x1: '0%', y1: '50%', x2: '0%', y2: '50%'});
                    line2.attr({x1: '100%', y1: '50%', x2: '100%', y2: '50%'});


                    // 建立一個圓形物件表示碰撞點
                    //var circle = s.circle(percent, '50%', 10).attr({fill: "#000000"});
                    //var qr_y =  +'%';
                    //var qr = s.image('pics/qrdemo.png', '30%', '60%' , 100, 100);
                    

                    // 設置動畫效果
                    setTimeout(function() {
                        line1.animate({x2: percent}, 2000, mina.easeout);
                        line2.animate({x2: percent}, 2000, mina.easeout);
                        //寬度動畫
                        Snap.animate(5, 20, function(value) {
                            line1.attr({ strokeWidth: value });
                            line2.attr({ strokeWidth: value });
                        }, 1800, mina.easeout);
                    }, 2000);

                /* 南粽countup function------------------------------ */
                let S_valueDisplays = document.querySelectorAll("#s_count_up");
                let S_interval = 2000;
                
                let S_delay = 2000;
                S_valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let duration = Math.floor(S_interval / response.s);
                setTimeout(() => {
                    let counter = setInterval(function () {
                        startValue += 1;
                        valueDisplay.textContent = startValue;
                        if (startValue == response.s) {
                            clearInterval(counter);
                        }
                    }, duration);
                }, S_delay);
                });

                /*北綜countup function---------------*/
                let N_valueDisplays = document.querySelectorAll("#n_count_up");
                let N_interval = 2000;

                let N_delay = 2000;
                N_valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let duration = Math.floor(N_interval / response.n);
                setTimeout(() => {
                    let counter = setInterval(function () {
                        startValue += 1;
                        valueDisplay.textContent = startValue;
                        if (startValue == response.n) {
                            clearInterval(counter);
                        }
                    }, duration);
                }, N_delay);
                });

                //show only on computer
                var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (!isMobile) {
                var qr = s.image('pics/qrdemo.png', '30%', '60%' , 100, 100);
                };
            }
        });
    });
});

/*北粽計算-無頁面跳轉 */
$(function() {
    $("#N_zong").click(function(e){
        e.preventDefault();
        $.ajax({
            url:'/cat_flow_main/Nzong',
            method:'GET',
            success: function(response) {
                //頁面滾動
                var scoreDiv = document.getElementById("right_now_score");
                var scrollToDiv = scoreDiv.getBoundingClientRect().top -50 + window.pageYOffset;
                var currentPosition = window.pageYOffset;
                var distance = scrollToDiv - currentPosition;
                var scrollDuration = 3000; // 滾動持續時間為3秒
                var scrollStep = distance / (scrollDuration / 16.6667); // 每毫秒應滾動的距離
                
                function animateScroll() {
                    currentPosition += scrollStep;
                    window.scrollTo(0, currentPosition);
                    if (currentPosition < scrollToDiv) {
                    requestAnimationFrame(animateScroll);
                    }
                }
                
                animateScroll();
                // 取得數據並顯示alert
                //alert('南粽加一票S_zong: ' + response.s + ', N_zong: ' + response.n);

                    /* 設置對波svg動畫------------------------------ */
                    // 將scoreData.s設定為百分之scoreData.s，而且是基於總投票數的百分比
                    var percent =  (response.s * 100) / (response.s + response.n) + '%';

                        // 建立一個SVG畫布
                    var s = Snap("#fight");
                    console.log(s);
                    // 繪製兩條線段
                    var line1 = s.line('0%', '50%', '0%', '50%');
                    var line2 = s.line('100%', '50%', '100%', '50%');

                    //寬度設定
                    line1.attr({ stroke: "#4FC47D", strokeWidth: 5, });
                    line2.attr({ stroke: "#F05A24", strokeWidth: 5, });

                    // 設置線段的起始位置
                    line1.attr({x1: '0%', y1: '50%', x2: '0%', y2: '50%'});
                    line2.attr({x1: '100%', y1: '50%', x2: '100%', y2: '50%'});


                    // 建立一個圓形物件表示碰撞點
                    //var circle = s.circle(percent, '50%', 10).attr({fill: "#000000"});
                    //var qr = s.image('pics/qrdemo.png', '30%', '60%' , 100, 100);

                    // 設置動畫效果
                    setTimeout(function() {
                        line1.animate({x2: percent}, 2000, mina.easeout);
                        line2.animate({x2: percent}, 2000, mina.easeout);
                        //寬度動畫
                        Snap.animate(5, 20, function(value) {
                            line1.attr({ strokeWidth: value });
                            line2.attr({ strokeWidth: value });
                        }, 1800, mina.easeout);
                    }, 2000);

                /* 南粽countup function------------------------------ */
                let S_valueDisplays = document.querySelectorAll("#s_count_up");
                let S_interval = 2000;
                
                let S_delay = 2000;
                S_valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let duration = Math.floor(S_interval / response.s);
                setTimeout(() => {
                    let counter = setInterval(function () {
                        startValue += 1;
                        valueDisplay.textContent = startValue;
                        if (startValue == response.s) {
                            clearInterval(counter);
                        }
                    }, duration);
                }, S_delay);
                });

                /*北綜countup function---------------*/
                let N_valueDisplays = document.querySelectorAll("#n_count_up");
                let N_interval = 2000;

                let N_delay = 2000;
                N_valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let duration = Math.floor(N_interval / response.n);
                setTimeout(() => {
                    let counter = setInterval(function () {
                        startValue += 1;
                        valueDisplay.textContent = startValue;
                        if (startValue == response.n) {
                            clearInterval(counter);
                        }
                    }, duration);
                }, N_delay);
                });

                //show only on computer
                var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (!isMobile) {
                var qr = s.image('pics/qrdemo.png', '30%', '60%' , 100, 100);
                };
            }
        });
    });
});