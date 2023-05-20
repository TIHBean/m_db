<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <script type="text/javascript" src="{{asset('js\Snap.svg-0.5.1\dist\snap.svg.js')}}"></script>
        <script type="text/javascript" src="{{asset('js\Snap.svg-0.5.1\dist\preload\arena.js')}}"></script>
        <link href="{{asset('css\arena_style.css')}}" rel="stylesheet" type="text/css">
        <script>
            window.onload = function() {
            var scoreData = {!! json_encode($score_data) !!};
            arena.init(scoreData);
            };
        </script>
    </head>
    <header>
    </header>
<body class="body">
    
    <!--飆數字-->
    <div class="main_arena">
        <!--左邊南粽票數-->
        <div>
            <h2 id="s_h2" class="num" data-val="{{$score_data['s']}}">0</h2>
        </div>
        <!--對波圖-->
        <div >
            <svg class="arena_center" id="fight"></svg>
        </div>
        <!--右邊北粽票數-->
        <div>
            <h2 id="n_h2" class="num" data-val="{{$score_data['n']}}">0</h2>
        </div>
    </div>
    <div class="main_arena">
        <div>
            <a style="color: white" href="http://127.0.0.1:8000/">come back</a>
        </div>
    </div>

    <!--空白空間-->
    <div style="height: 1000px"></div>
</body>
