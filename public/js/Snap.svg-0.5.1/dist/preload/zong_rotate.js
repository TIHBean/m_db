window.onload = function() {
  /* zong rotate */
      var s = Snap("#preload_zong"); 
      var pic = s.image("pics/zong.svg", 0, 0, 100, 100); // 设置图像宽度和高度
      var cx = 50, cy = 50;
      
      // 定义动画函数，每次旋转 10 度
      var animateRotate = function() {
        Snap.animate(0, 360, function(val) {
          var m = Snap.matrix(); // 创建 Snap.Matrix 对象
          m.rotate(val, cx, cy);
          pic.transform(m); // 将变换矩阵应用到图像对象上
        }, 2000, mina.bounce,animateRotate); // 持续时间为 1 秒，循环执行动画
      };
      
      animateRotate(); // 执行动画函数
    
  /* line animation */
      var l = Snap("#line_test");
      var line = l.line(0, 0, 0, 0);

      var animateLine = function() {
          Snap.animate(0, 100, function(req) {
              // 设置线段终点的 x 坐标
              line.attr({
              stroke: "#4DC47D",
              strokeWidth: 5,
              x2: 0+ req
              });
            }, 2000, mina.bounce);
      };
      
      animateLine(); // 执行动画

                var z_div = Snap("#zoom_box");
                //圓形
                var bigC = z_div.circle("50%", "50%", r=2000);
                    bigC.attr({ 
                      stroke: '#4DC47D', 
                      'strokeWidth': 1000,
                      fill: '#ffffff00' });
                // 使用 Snap.svg 提供的动画函数
                bigC.animate({ r: 500 }, 3000, null, function() {
                  // 动画完成后跳转到指定 URL
                  window.location.href = "http://127.0.0.1:8000/cat_flow_main";
                });
                  
    
};


