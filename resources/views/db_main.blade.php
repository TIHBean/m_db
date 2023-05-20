<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <script type="text/javascript" src="{{asset('js\Snap.svg-0.5.1\dist\snap.svg.js')}}"></script>
        <script type="text/javascript" src="{{asset('js\Snap.svg-0.5.1\dist\preload\zong_rotate.js')}}"></script>
        <script type="text/javascript" src="{{asset('js\Snap.svg-0.5.1\dist\preload\zoom_out.js')}}"></script>
        <link href="{{asset('css\main_style.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body class="body">
        <div class="div_center">
            <svg class="zong" id="preload_zong"></svg>
            <div>
                <svg class="l" id="line_test"></svg>
            </div>
        </div>
        <div>
        <svg class="div_zoom_out" id="zoom_box"></svg>
        </div>
    </body>
</html>