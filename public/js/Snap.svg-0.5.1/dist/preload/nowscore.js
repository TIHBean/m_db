
/*取controller的值，並轉換為資料*/
    var livesco = {
        init: function(response) {
        console.log(response.s);
        console.log(response.n);

/* 設置對波svg動畫 */
    // 將scoreData.s設定為百分之scoreData.s，而且是基於總投票數的百分比
    var percent =  (response.s * 100) / (response.s + response.n) + '%';

        // 建立一個SVG畫布
    var s = Snap("#fight");
    console.log(s);
    // 繪製兩條線段
    var line1 = s.line('0%', '50%', '0%', '50%');
    var line2 = s.line('100%', '50%', '100%', '50%');

    //寬度設定
    line1.attr({ stroke: "red", strokeWidth: 5});
    line2.attr({ stroke: "green", strokeWidth: 5});

    // 設置線段的起始位置
    line1.attr({x1: '0%', y1: '50%', x2: '0%', y2: '50%'});
    line2.attr({x1: '100%', y1: '50%', x2: '100%', y2: '50%'});


    // 建立一個圓形物件表示碰撞點
    var circle = s.circle(percent, '50%', 10).attr({fill: "#000000"});

    // 設置動畫效果
    line1.animate({x2: percent}, 2000, mina.easeout);
    line2.animate({x2: percent}, 2000, mina.easeout);

    //寬度動畫
    Snap.animate(5, 100, function(value) {
        line1.attr({ strokeWidth: value });
        line2.attr({ strokeWidth: value });
    }, 1800, mina.easeout);

}
};


