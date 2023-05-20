/*mouse track */
$(document).ready(function(){
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
const img = document.getElementById('sle-follow');

document.addEventListener('mousemove', (event) => {
    img.style.left = event.pageX + 2 + 'px';
    img.style.top = event.pageY + 2 + 'px';
    img.style.display = 'block';
});
}});

/*下滑提示粽 */
$(document).ready(function() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
    var s = Snap("#drop_zong");
    var pic = s.image("pics/zong.svg", 0, 0, 100, 100);
    var targetDiv = document.getElementById("drop_zong"); // 取得目標 <div> 的元素
    
    var observer = new IntersectionObserver(function(entries) {
      var entry = entries[0]; // 假設只有一個目標元素，直接訪問 entries[0]
      if (entry.isIntersecting) {
        // 如果目標 <div> 可見，開始動畫
        setTimeout(anidrop, 1000)
      } else {
        // 如果目標 <div> 不可見，停止動畫
        pic.stop();
      }
    });
    
    // 觀察目標 <div> 的可見性
    observer.observe(targetDiv);
    
        var anidrop = function() {
        Snap.animate(0, 50, function(drop) {
            var m = Snap.matrix();
            m.translate(null, drop);
            pic.transform(m);
        }, 2000, mina.bounce, anidrop);
        };

  // 點擊事件處理
  pic.click(function() {
    
            // 頁面滾動
        var currentPosition = window.pageYOffset;
        var targetPosition = currentPosition + 500; // 目標垂直滾動位置
        var scrollDuration = 1000; // 滾動持續時間為1秒
        var scrollStep = 20; // 每毫秒應滾動的距離

        function animateScroll() {
        currentPosition += scrollStep;
        window.scrollTo(0, currentPosition);

        if (currentPosition < targetPosition) {
            requestAnimationFrame(animateScroll);
        }
        }

        animateScroll();
  });
  

  }});

  
/* 店家圖片位移function-------------------------------- */
/* 店家圖片向左位移功能 */
$(window).on('scroll', function() {
  const scrollTop = $(window).scrollTop();
  const storeImg = $('.store_img');
  const storeImgTop = storeImg.offset().top;
  const targetTop = $(window).height();

  if (scrollTop >= storeImgTop - targetTop) {
    const translateY = (scrollTop - storeImgTop) * 0.1;
    storeImg.css('transform', `translatex(${translateY}px)`);
  } else {
    storeImg.css('transform', 'none');
  }
});

/* 店家圖片向右位移功能 */
$(window).on('scroll', function() {
  const scrollTop = $(window).scrollTop();
  const storeImg = $('.store_img_r');
  const storeImgTop = storeImg.offset().top;
  const targetTop = $(window).height();

  if (scrollTop >= storeImgTop - targetTop) {
    const translateY = (scrollTop - storeImgTop) * -0.1;
    storeImg.css('transform', `translatex(${translateY}px)`);
  } else {
    storeImg.css('transform', 'none');
  }
});

/* 店家敘述向左位移功能 */
$(window).on('scroll', function() {
  const scrollTop = $(window).scrollTop();
  const storeImg = $('.store_artile');
  const storeImgTop = storeImg.offset().top;
  const targetTop = $(window).height();

  if (scrollTop >= storeImgTop - targetTop) {
    const translateY = (scrollTop - storeImgTop) * 0.1;
    storeImg.css('transform', `translateX(${translateY}px)`);
  } else {
    storeImg.css('transform', 'none');
  }
});

/* 店家敘述向右位移功能 */
$(window).on('scroll', function() {
  const scrollTop = $(window).scrollTop();
  const storeImg = $('.store_artile_r');
  const storeImgTop = storeImg.offset().top;
  const targetTop = $(window).height();

  if (scrollTop >= storeImgTop - targetTop) {
    const translateY = (scrollTop - storeImgTop) * -0.1;
    storeImg.css('transform', `translateX(${translateY}px)`);
  } else {
    storeImg.css('transform', 'none');
  }
});


/*店家背景放大功能 */
  //南粽-1
  $(document).ready(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
    var spbg = Snap("#Szong_party_bg");
    var spbg_c = spbg.circle('50%', '50%', r = 100);
    spbg_c.attr({ fill: '#4DC47D' });
  
    $(window).on('scroll', function() {
      const scrollTop = $(window).scrollTop()/1000;
      const storeImg = $('#Szong_party_bg');
      const maxScale = 2.5; // 设置放大的最大倍数
      const speed = scrollTop*scrollTop;
      const clean_speed = speed.toFixed(3);
      let scale = clean_speed/6;
      if (scale > maxScale) {
        scale = maxScale;
      }
      if(scale<0){
        scale =1;
      }
      
      storeImg.css('transform', `scale(${scale})`);
    });
  }});
  
  //北粽-1
  $(document).ready(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
    var spbg = Snap("#Nzong_party_bg");
    var spbg_c = spbg.circle('50%', '50%', r = 100);
    spbg_c.attr({ fill: '#4E3B1F' });

    $(window).on('scroll', function() {
      const scrollTop = $(window).scrollTop()/1000;
      const storeImg = $('#Nzong_party_bg');
      const maxScale = 2.5; // 设置放大的最大倍数
      const speed = scrollTop*scrollTop;
      const clean_speed = speed.toFixed(3);
      let scale = clean_speed/8;
      if (scale > maxScale) {
        scale = maxScale;
      }
      if(scale<0){
        scale =1;
      }
      storeImg.css('transform', `scale(${scale})`);
    });
  }});


  
  /*other function */
  /*cloud */
  $(window).on('scroll', function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const scrollTop = $(window).scrollTop();
    const storeImg = $('.cloud');
    const storeImgTop = storeImg.offset().top;
    const targetTop = $(window).height();
      const translateY = (scrollTop - storeImgTop) * 0.3-400;
      storeImg.css('transform', `translatey(${translateY}px)`);

  if (!isMobile) {
    const scrollTop = $(window).scrollTop();
    const storeImg = $('.cloud');
    const storeImgTop = storeImg.offset().top;
    const targetTop = $(window).height();
      const translateY = (scrollTop - storeImgTop) * 0.3;
      storeImg.css('transform', `translatey(${translateY}px)`);
  }});

  //sun
  $(document).ready(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (!isMobile) {
    var spbg = Snap("#sun");
    var spbg_c = spbg.circle('50%', '50%', r = 100);
    spbg_c.attr({ fill: '#F7C355' });

    $(window).on('scroll', function() {
      const scrollTop = $(window).scrollTop();
      const storeImg = $('#sun');
      const maxScale = 5; // 设置放大的最大倍数
      let scale = scrollTop/ 800;  
      if (scale > maxScale) {
        scale = maxScale;
      }
      storeImg.css('transform', `scale(${scale})`);
    });
  }});
  

  
  
  
  
  
  

  

